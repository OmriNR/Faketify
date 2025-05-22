import UserModel from "../models/userModel";

class UsersService {
    async createUser(data: { username: string; password: string }) {
        const user = new UserModel(data);
        return await user.save();
    }

    async getUserById(id: string) {
        return await UserModel.findById(id);
    }

    async getUserByUsernameAndPassword(username: string, password: string) {
        return await UserModel.find({ username, password });
    }

    async updateUser(id: string, data: Partial<
        { username: string; password: string; likedPlaylists: string[]; managedPlaylists: string[] }>) {
        return await UserModel.findByIdAndUpdate(id, data, { new: true });
    }
}

export default new UsersService();