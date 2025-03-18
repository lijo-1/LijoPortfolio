import type { NextApiRequest, NextApiResponse } from "next";

// Ensure environment variables exist
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN!;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";

// Type for Access Token response
type SpotifyTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

// Type for Now Playing song data
type SpotifySongData = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
};

// Function to get a new access token
const getAccessToken = async (): Promise<SpotifyTokenResponse> => {
  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${CLIENT_ID}:${CLIENT_SECRET}`
        ).toString("base64")}`,
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: REFRESH_TOKEN,
      }),
    });

    if (!response.ok) {
      throw new Error(`Spotify Token Fetch Failed: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching Spotify access token:", error);
    throw error;
  }
};

// Fetch Now Playing Data
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SpotifySongData>
) {
  try {
    const { access_token } = await getAccessToken();

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (response.status === 204 || response.status > 400) {
      return res.status(200).json({ isPlaying: false });
    }

    const song = await response.json();

    res.status(200).json({
      isPlaying: song.is_playing,
      title: song.item?.name,
      artist: song.item?.artists.map((artist: { name: string }) => artist.name).join(", "),
      album: song.item?.album.name,
      albumImageUrl: song.item?.album.images[0]?.url,
      songUrl: song.item?.external_urls.spotify,
    });
  } catch (error) {
    console.error("Error fetching Spotify now playing:", error);
    res.status(500).json({ isPlaying: false });
  }
}
