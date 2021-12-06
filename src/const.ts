import {Order} from "./types/order"

export const enum Genres {
  Adventures = "adventures",
  Horror = "horror",
  Mystic = "mystic",
  Detective = "detective",
  SciFi = "Sci-fi",
}

export const enum Level {
  simple = "simple",
  medium = "medium",
  hard = "hard",
}

export const enum Duration {
  Hour = 60,
  HourAndHalf = 90,
  TwoHours = 120,
}

export const EMPTY_ORDER: Order = {
  name: "",
  peopleCount: 0,
  phone: "",
  isLegal: true,
}

export enum AppRoute {
  Root = '/',
  Quest = '/quest',
  Contacts = '/contacts',
}

export enum APIRoute {
  Quests = '/quests',
  Order = '/orders',
}
