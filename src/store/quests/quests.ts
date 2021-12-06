import {createReducer} from '@reduxjs/toolkit';
import {loadQuests, openQuest} from '../action';
import {QuestsType} from '../../types/state';

const initialState: QuestsType = {
  quests: [],
  quest: undefined,
};

const quests = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
    })
    .addCase(openQuest, (state, action) => {
      state.quest = action.payload;
    })
});

export {quests};
