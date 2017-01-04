var React = require('react');
var Nav = require('Nav');
//var ReactDOM = require('react-dom');

var Main = React.createClass({
    render: function () {

        return (
            <div>
            <Nav />
                <h1>
                    This is the Main Component
                    </h1>
                
                {this.props.children};
            </div>
        )
    }
})


module.exports = Main;