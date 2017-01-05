var React = require('react');
var {Link} = require("react-router");

// var Example = React.createClass({
//     render:function(){
//         return(
//             <p>Example Page</p>
//         )
//     }
// })
var Example = (props) => {
    return (
        <div>
            <h1 className="text-center">Example Page</h1>
            <p className="text-center">Welcome to the Example page</p>

            <ol>
                <li>
                <Link to = "/">Go To Home Page</Link>
                </li>
            </ol>
        </div>
    )
}
module.exports = Example;