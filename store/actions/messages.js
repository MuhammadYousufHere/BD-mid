import { DECREMENT_MESSAGES_COUNT } from "./types";

export const decrementMessageCount = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: DECREMENT_MESSAGES_COUNT,
      });
    } catch (error) {
      throw error;
    }
  };
};