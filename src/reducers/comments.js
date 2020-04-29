import { FETCH_COMMENTS, SAVE_COMMENT } from "actions/types" ;

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_COMMENTS:
            return [...state, ...action.payload];
        case SAVE_COMMENT:
            return [...state, action.payload];
        default:
            return state;
    }
};