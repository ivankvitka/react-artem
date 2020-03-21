import {FETCH_PLACEHOLDERS_FULFILLED, FETCH_PLACEHOLDERS_PENDING, FETCH_PLACEHOLDERS_REJECTED} from "./constants";

export const fetchPlaceholdersPending = () => ({
    type: FETCH_PLACEHOLDERS_PENDING
});

export const fetchPlaceholdersRejected = (error) => ({
    type: FETCH_PLACEHOLDERS_REJECTED,
    payload: error
});

export const fetchPlaceholdersFulfilled = (data) => ({
    type: FETCH_PLACEHOLDERS_FULFILLED,
    payload: data
});

export const getPlaceholders = () => (dispatch) => {
    dispatch(fetchPlaceholdersPending());

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(data => dispatch(fetchPlaceholdersFulfilled(data)))
        .catch(error => dispatch(fetchPlaceholdersRejected(error.message)))
};