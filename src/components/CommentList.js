import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        );
    }

    renderComments() {
        let {comments=[]} = this.props;

        return comments.map(comment => {
            return <li key={comment}>{comment}</li>;
        });
    }
}

let mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
};

export default connect(mapStateToProps)(CommentList);