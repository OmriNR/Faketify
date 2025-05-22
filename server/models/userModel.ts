import mongoose, { Document, Schema } from 'mongoose';

export interface User extends Document {
    username: string;
    password: string;
    likedPlaylists: string[];
    managedPlaylists: string[];
}

const userSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    likedPlaylists: [{ type: String }],
    managedPlaylists: [{ type: String }]
});

const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;