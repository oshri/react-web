import React, { Component } from 'react';
import GithubApi from '../../services/github';
import User from '../../components/User';
import Search from '../../components/Search';
import './App.css';

const gitApi = new GithubApi();

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			user: null,
			error: null
		};
	}

	async searchUser(userName) {
		this.setState({ isLoading: true });
		const user = await gitApi.getUserDetails(userName).catch(error => {
			this.setState({ user: null, error });
		});
    this.setState({ user, isLoading: false });
	}

	render() {
		return (
			<div className="App">
				<Search
					onSearch={this.searchUser.bind(this)}
					loading={this.state.isLoading}
				/>
				<User details={this.state.user} />
			</div>
		);
	}
}

export default App;
