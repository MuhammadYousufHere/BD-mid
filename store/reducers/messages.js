import { DECREMENT_MESSAGES_COUNT } from "../actions/messages";

const initialState = {
  unread_count: 1,
};

const message = (state = initialState, action) => {
  const decrementMessageCount = (state, action) => {
    let unread_count = state.unread_count;

    return {
      ...state,
      unread_count: unread_count - 1,
    };
  };

  switch (action.type) {
    case DECREMENT_MESSAGES_COUNT:
      return decrementMessageCount(state, action);
  }
  return state;
};
export default message;
