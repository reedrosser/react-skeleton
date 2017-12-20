// var React = require('react');
// var ListItem = require('./ListItem.jsx');
// var createReactClass = require('create-react-class');
import React from 'react';
import ListItem from './ListItem.jsx';
import createReactClass from 'create-react-class';

var ingredients = [
    {"id": 1, "text": "ham"},
    {"id": 2, "text": "cheese"}, 
    {"id": 3, "text": "eggs"}, 
];

var List = createReactClass({
    render: function() {
        var listItems = ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;