export type Song = {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  link: string;
  like:boolean;
};
export const DUMMY_SONGS: Song[] = [
  { id: 0, title: 'song 2', artist: 'blur', album: 'best of', duration: '4:13', link: 'http://localhost:3000/songs/Blur-Song2.mp3', like: false },
  { id: 1, title: '505', artist: 'Arctic Monkeys', album: 'Favorite Worst Nightmare', duration: '3:22', link: 'http://localhost:3000/songs/505.mp3', like: false },
  { id: 2, title: 'someday', artist: 'The Strokes', album: 'Is This It', duration: '3:05', link: 'http://localhost:3000/songs/Someday.mp3', like: false }
]

export const songLoader = (): Song[] => DUMMY_SONGS
