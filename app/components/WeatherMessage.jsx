var React = require('react');

var WeatherMessage = React.createClass({
    render:function(){
        return (
            <h3 className = "text-center">Its {this.props.temp} in {this.props.loc}</h3>
        )
    }
})
module.exports = WeatherMessage;