import { DECREMENT_NOTIFICATION_COUNT } from "../actions/notifications";

const initialState = {
  unread_count: 0,
};

const notification = (state = initialState, action) => {
  const decrementNotificationCount = (state, action) => {
    let unread_count = state.unread_count;

    return {
      ...state,
      unread_count: unread_count - 1,
    };
  };

  switch (action.type) {
    case DECREMENT_NOTIFICATION_COUNT:
      return decrementNotificationCount(state, action);
  }
  return state;
};

export default notification;
