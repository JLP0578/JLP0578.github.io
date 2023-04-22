// https://github.com/lwcheun/React_Expense_Tracker/tree/92701e56006e6054cb877fa451d4cc42b6e74053/src

const initialState = {
    loading: false
}

export default function AppReducer(state = initialState, action) {
    let result;
    switch (action.type) {
        case 'IS_LOADED':
            result = {
                ...state,
                loading: action.payload.isLoading
            };
            break;
      default:
        result = state;
        break;
    }

    return result;
}