"use client";
import { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa6";

// Define the structure of the Spotify API response
type SongData = {
  isPlaying: boolean;
  title: string;
  album: string;
  songUrl: string;
};

const Spotify = () => {
  const [song, setSong] = useState<SongData | null>(null);

  useEffect(() => {
    const fetchSong = async (): Promise<void> => {
      try {
        const res = await fetch("/api/spotify"); // Fetch from your API
        const data: SongData = await res.json();

        if (data.isPlaying) {
          setSong(data);
        } else {
          setSong(null);
        }
      } catch (error) {
        console.error("Error fetching Spotify data", error);
      }
    };

    fetchSong();
    const interval = setInterval(fetchSong, 5000); // Auto-refresh every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="res-grid mt-14 pb-5">
      <div className="col-start-1 col-end-5 flex gap-x-4 items-center md:col-end-9">
        <FaSpotify className="text-[#25D865] text-[36px] flex-shrink-0" />
        {song ? (
          <div className="flex items-center">
            <a
              href={song.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-regular text-[16px] text-[#3be477] hover:underline md:text-[16px]"
            >
              {song.title} -{" "}
              <span className="text-white text-[14px] font-light md:text-[14px]">
                {song.album}
              </span>
            </a>
          </div>
        ) : (
          <p className="font-medium text-[20px] text-white">Not Playing :(</p>
        )}
      </div>
    </div>
  );
};

export default Spotify;
