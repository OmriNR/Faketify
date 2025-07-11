export interface IPlaylist {
    id: string | null,
    name: string,
    songs: string[],
    createdAt: Date,
    updatedAt: Date,
    createdBy: string,
}