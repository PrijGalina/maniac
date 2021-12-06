import {Genres, Level, Duration} from '../const';

export type Quest = {
  id: number,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: Genres,
  level: Level,
  peopleCount: number[],
  duration: Duration,
}
