// eslint-disable-next-line import/no-anonymous-default-export
export default function (state, action) {
  switch (action.type) {
    case "add": {
      return [
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
        ...state,
      ];
    }
    case "remove": {
      return state.filter((item) => item.id !== action.payload.id);
    }
    case "edit": {
      return state.map((item) => {
        if (item.id === action.payload.todo.id) {
          return {
            ...item,
            text: action.payload.newValue,
          };
        }
        return item;
      });
    }
    case "complete": {
      const mappedArray = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, completed: !action.payload.completed }
          : item
      );
      const completed = mappedArray.filter(
        (item) => item.id === action.payload.id
      );
      state = mappedArray.filter((item) => item.id !== action.payload.id);
      if (completed[0].completed === true) return [...state, completed[0]];
      else return [completed[0], ...state];
    }
    default:
      return state;
  }
}
