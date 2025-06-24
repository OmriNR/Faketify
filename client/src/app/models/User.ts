export interface IUser {
    id: string,
    name: string,
    password: string,
    ownedPlaylists: string[],
    followedUsers: string[],
    createdAt: Date,
    updatedAt: Date,
}