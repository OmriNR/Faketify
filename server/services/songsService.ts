import SongModel from '../models/songModel';

class SongsService {
    // Create a new song
    async createSong(data: { title: string; artist: string; album?: string; year?: number }) {
        const song = new SongModel(data);
        return await song.save();
    }

    // Get all songs
    async getAllSongs() {
        return await SongModel.find();
    }

    // Get a song by ID
    async getSongById(id: string) {
        return await SongModel.findById(id);
    }

    // Update a song by ID
    async updateSong(id: string, data: Partial<{ title: string; artist: string; album?: string; year?: number }>) {
        return await SongModel.findByIdAndUpdate(id, data, { new: true });
    }

    // Delete a song by ID
    async deleteSong(id: string) {
        return await SongModel.findByIdAndDelete(id);
    }
}

export default new SongsService();