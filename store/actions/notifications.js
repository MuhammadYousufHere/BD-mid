import { DECREMENT_NOTIFICATION_COUNT } from "./types";
export const decrementNotificationCount = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: DECREMENT_NOTIFICATION_COUNT,
      });
    } catch (error) {
      throw error;
    }
  };
};