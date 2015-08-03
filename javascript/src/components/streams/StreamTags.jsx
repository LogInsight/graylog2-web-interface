'use strict';

var React = require('react');

var Tag = require('../tags/Tag');

var StreamTags = React.createClass({
    render() {
        var formattedTags = this.props.tags.map((tag) => {
            return <li key={"li-" + tag}><Tag name={tag}/></li>
        });

        if (this.props.tags === 0) {
            return <div></div>;
        } else {
            return (
                <ul className="tag-list" style={{fontSize: 16}}>
                    {formattedTags}
                </ul>
            );
        }
    }
});

module.exports = StreamTags;