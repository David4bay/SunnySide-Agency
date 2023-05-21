/* eslint-disable react/prop-types */
import React from 'react'

class Article extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            <article className={this.props.className}>
                {/* // eslint-disable-next-line react/prop-types */}
                {this.props.children}
            </article>
        )
    }
}

export default Article;