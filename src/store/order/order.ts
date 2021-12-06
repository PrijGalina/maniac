import {createReducer} from '@reduxjs/toolkit';
import {sendOrder} from '../action';
import {OrderType} from '../../types/state';
import {EMPTY_ORDER} from '../../const';

const initialState: OrderType = {
  order: EMPTY_ORDER,
};

const order = createReducer(initialState, (builder) => {
  builder
    .addCase(sendOrder, (state, action) => {
      state.order = action.payload;
    })
});

export {order};
