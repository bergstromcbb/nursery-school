var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            ReactWeatherApp
                    </li>
                        <li>
                            <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active">About</Link>
                        </li>
                        <li>
                            <Link to="/Example" activeClassName="active">Example</Link>
                        </li>
                    </ul>

                </div>

                <div className="top-bar-right">
                    <form>
                        <ul className="menu">
                            <li><input type="search" placeholder= "please Search"/>  </li>
                            <li><input type="submit" className = "button" value = "GetWeather"/> </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
})
module.exports = Nav;

var old = (<div>
    <h2>Navigation bar</h2>
    <Link to="/">Get Weather</Link>
    <Link to="/about">About</Link>
    <Link to="/Example">Example</Link>
</div>);