import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handles actions of type save comment", () => {
    let newComment = "test comment";

    let action = {
        type: SAVE_COMMENT,
        payload: newComment
    };

    let newState = commentsReducer([], action);
    expect(newState).toEqual([newComment]);
});

it("handles action with unknown type", () => {
    let newState = commentsReducer([], {
        type: "UNKNOWN"
    });
    expect(newState).toEqual([]);
});