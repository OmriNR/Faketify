import mongoose, { Document, Schema } from 'mongoose';

export interface Song extends Document {
    title: string;
    artist: string;
    filePath: string;
}

const songSchema: Schema = new Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    filePath: { type: String, required: true }
});

const SongModel = mongoose.model<Song>('Song', songSchema);

export default SongModel;