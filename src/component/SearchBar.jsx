import React, { Component } from "react";
import { Paper, TextField } from "@material-ui/core";
class SearchBar extends Component {
	state = {
		searchTerm: "",
	};
	handleChange = (e) => {
		e.preventDefault();
		this.setState({
			searchTerm: e.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const { searchTerm } = this.state;
		const { onFormSubmit } = this.props;

		onFormSubmit(searchTerm);
	};

	render() {
		return (
			<div>
				<Paper elevation={6} style={{ padding: "25px" }}>
					<form onSubmit={this.handleSubmit}>
						<TextField
							fullwidth="true"
							label="Search..."
							onChange={(e) => this.handleChange(e)}
						></TextField>
					</form>
				</Paper>
			</div>
		);
	}
}

export default SearchBar;
