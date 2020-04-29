import React from "react";
import { mount } from "enzyme";

import Root from "Root";
import CommentBox from "components/CommentBox";

let component;

beforeEach(() => {
    component = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
    component.unmount();
});

it("has a text area and two buttons", () => {
    expect(component.find("textarea").length).toEqual(1);
    expect(component.find("button").length).toEqual(2);
});

describe("the text area", () => {
    beforeEach(() => {
        component.find("textarea").simulate("change", {
            target: {
                value: "new comment"
            }
        });
        component.update();
    });

    it("hs a text area users can type in", () => {
        expect(component.find("textarea").prop("value")).toEqual("new comment");
    });
    
    it("has a textarea that is emptied after a form is submitted", () => {        
        component.find("textarea").simulate("submit");
        component.update();
    
        expect(component.find("textarea").prop("value")).toEqual("");
    });
});