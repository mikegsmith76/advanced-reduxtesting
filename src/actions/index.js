import axios from "axios";
import { FETCH_COMMENTS, SAVE_COMMENT } from "actions/types" ;

export async function fetchComments() {
    const response = await axios.get("http://jsonplaceholder.typicode.com/comments");

    let comments = response.data.map(comment => {
        return comment.body;
    });

    return {
        type: FETCH_COMMENTS,
        payload: comments
    };
};

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
};