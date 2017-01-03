var React = require('react');

var WeatherMessage = React.createClass({
    render:function(){
        return (
            <h1>Its {this.props.temp} in {this.props.loc}</h1>
        )
    }
})
module.exports = WeatherMessage;