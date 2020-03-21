import {
    FETCH_PLACEHOLDERS_FULFILLED,
    FETCH_PLACEHOLDERS_PENDING,
    FETCH_PLACEHOLDERS_REJECTED
} from "./constants";

const initialState = {
    isLoading: false,
    hasError: false,
    errorMessage: '',
    data: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PLACEHOLDERS_PENDING:
            return {
                ...state,
                isLoading: true,
                hasError: false
            };
        case FETCH_PLACEHOLDERS_FULFILLED:
            return {
                ...state,
                isLoading: false,
                hasError: false,
                errorMessage: '',
                data: action.payload
            };
        case FETCH_PLACEHOLDERS_REJECTED:
            return {
                ...state,
                isLoading: false,
                hasError: true,
                errorMessage: action.payload,
                data: [],
            };


        default:
            return state;
    }
};