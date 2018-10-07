import React from "react"
import { Link } from "react-router-dom";
import history from '../history';

class Header extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			location: ""
		}
	}

	handleUpdate = (e) => {
		this.setState({
			location: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		document.getElementById('headerInput').value = '';
		var location = this.state.location; // cache state
		this.setState({
			location: ''
		}); // reset state		
		history.push('/forecast/' + location);
	}

	handleEnter = (e) => {
		if (e.charCode === 13) {
			this.handleSubmit(e);
		}
	}

	render() {
		return (
			<div className="main-nav">
				<Link to="/">
					<h2 className="nav-logo">Weather</h2>
				</Link>
				<button type="button" className="btn header-button hidden-xs" onClick={this.handleSubmit}>Get Weather</button>
				<input type="text" className="text-input hidden-xs" placeholder="Karachi, Pakistan" onChange={this.handleUpdate} onKeyPress={this.handleEnter} id="headerInput" />
			</div>
		)
	}

}



export default Header