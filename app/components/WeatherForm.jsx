var React = require('react');

var WeatherForm = React.createClass({
    passLocation: function (e) {
        e.preventDefault();

        var loc = this.refs.loc.value;
        if (loc.length > 0) {
            
            this.props.newLoc(loc);
            this.refs.loc.value = "";
        }
    },
    render: function () {
        return (
            <form onSubmit={this.passLocation}>
                <input type="text" ref="loc" />
                <button className = "button expanded hollow">Get Weather</button>
            </form>
        )
    }
})
module.exports = WeatherForm;