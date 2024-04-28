import React, { useState, useContext, createContext, ReactNode } from "react";
import { Song } from "../data/Song";

const PlayedSongContext = createContext<{
    playedSong: Song;
    setPlayedSong: (song: Song) => void;
}>({
    playedSong: {} as Song,
    setPlayedSong: () => {}
});

export function usePlayedSong() {
    return useContext(PlayedSongContext);
}

type Props = {
    children: ReactNode
}

export function PlayedSongProvider({children} : Props) {
    const [playedSong, setPlayedSong] = useState<Song>({} as Song);

    return (
        <PlayedSongContext.Provider value={{playedSong, setPlayedSong}}>
            {children}
        </PlayedSongContext.Provider>
    )
}
