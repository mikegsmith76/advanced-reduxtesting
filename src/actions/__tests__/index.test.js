import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("saveComment", () => {
    it("has the correct type", () => {
        let action = saveComment("New comment");
        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it("has the correct payload", () => {
        let action = saveComment("New Comment");
        expect(action.payload).toEqual("New Comment");
    });
});