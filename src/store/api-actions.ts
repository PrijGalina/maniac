import {toast} from 'react-toastify';
import {ThunkActionResult} from '../types/action';
import {loadQuests, openQuest, sendOrder} from './action';
import {APIRoute} from '../const';
import {Quest} from '../types/quests';
import {Order} from '../types/order';

const ORDER_FAIL_MESSAGE = 'Ошибка при отправке заказа';

export const fetchQuestsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Quest[]>(APIRoute.Quests);
    dispatch(loadQuests(data));
  };

  export const fetchQuestAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const path = `${APIRoute.Quests}/${id}`;
    const {data} = await api.get<Quest>(path);
    dispatch(openQuest(data));
  };

  export const sendOrderAction = (order: Order): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const path = APIRoute.Order;
    await api.post<Order>(path, order)
      .then(() => {
        dispatch(sendOrder);
      })
      .catch(() => {
        toast.info(ORDER_FAIL_MESSAGE);
      });
  };
