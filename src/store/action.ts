import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../types/action';
import {Quest} from '../types/quests';
import {Order} from '../types/order';

export const loadQuests = createAction<Quest[]>(ActionType.LoadQuests);

export const openQuest = createAction<Quest | undefined>(ActionType.OpenQuest);

export const sendOrder = createAction<Order>(ActionType.SendOrder);
