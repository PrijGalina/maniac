
import {combineReducers} from 'redux';
import {quests} from './quests/quests';
import {order} from './order/order';


export enum NameSpace {
  questsReducer = 'QUESTS',
  orderReducer = 'ORDER',
}

export const rootReducer = combineReducers({
  [NameSpace.questsReducer]: quests,
  [NameSpace.orderReducer]: order,

});

export type RootState = ReturnType<typeof rootReducer>;
