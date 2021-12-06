import {RootState} from '../store/root-reducer';
import {Quest} from './quests';
import {Order} from './order';

export type QuestsType = {
  quests: Quest[],
  quest: Quest | undefined,
};

export type OrderType = {
  order: Order,
};

export type State = RootState;
