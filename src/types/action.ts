import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';

export enum ActionType {
  LoadQuests = 'quest/loadQuests',
  OpenQuest = 'quest/openQuest',
  SendOrder = 'order/sendOrder',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
