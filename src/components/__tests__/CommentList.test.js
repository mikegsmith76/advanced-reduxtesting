import React from "react";
import { mount } from "enzyme";

import Root from "Root";
import CommentList from "components/CommentList";

let component;

let initialState = {
    comments: [
        "New Comment",
        "Additional Comment",
    ]
};

beforeEach(() => {
    component = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

it("creates one li per comment", () => {
    expect(component.find("li").length).toEqual(initialState.comments.length);
});

it("shows the text for each comment", () => {
    let content = component.render().text();

    initialState.comments.forEach(comment => {
        expect(content).toContain(comment);
    });
});