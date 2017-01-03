var React = require('react');
var Nav = require('Nav');
//var ReactDOM = require('react-dom');

var Main = React.createClass({
    render: function () {

        return (
            <div>
                <h1>
                    This is the Main Component
                    </h1>
                <Nav />
                {this.props.children};
            </div>
        )
    }
})


module.exports = Main;