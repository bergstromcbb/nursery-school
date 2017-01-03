var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
            //    temp : 22,
            //    loc:"karachi"
        };

    },
    handleNewLocation: function (loc) {
        var that = this;

        this.setState({
            isLoading: true
        })

        openWeatherMap.getTemp(loc).then(function (temp) {
            that.setState({
                temp: temp,    
                loc: loc,
                isLoading:false
            })
        },
            function (err) {
                that.setState({
                    isLoading:false
                });
                alert(err);
            })
        //  this.setState({
        //      loc : loc,
        //      temp:88
        //  })
    },
    render: function () {

 var {temp,loc,isLoading} = this.state;
        function renderMessage() {
            if(isLoading){
           return <h1>Fetching data..........</h1>
            }
            else if(temp && loc){
            return <WeatherMessage temp={temp} loc={loc} />;
            }
              
        }
        return (
            <div>
                <h3>This is the Weather component</h3>
                <WeatherForm newLoc={this.handleNewLocation} />
                {renderMessage()}
            </div>
        )
    }
})
module.exports = Weather;