import { ISong } from './Song';

export interface Playlist {
    id: string;
    title: string;
    description: string;
    songs: ISong[];
    createdAt: Date;
    updatedAt: Date;
    userId: string;
}