import React, { Component } from 'react';
import './Search.css';
class Search extends Component {

	componentDidMount(){
		this.refs.user.focus();
	  }

	callOnSearch() {
		this.props.onSearch(this.refs.user.value);
	}

	renderButton() {
		return this.props.loading ? (
			<div className="spinner">
				<i className="fa fa-spinner" />
			</div>
		) : (
			<button className="button" onClick={this.callOnSearch.bind(this)}>
				<i className="fa fa-search" />
			</button>
		);
    }
    
    handleKeyPress(event) {
        if(event.key === 'Enter'){
            this.callOnSearch();
        }
    }

	render() {
		return (
			<div className="Search">
				<input
					className="Input"
					placeholder="Search User In Github"
                    ref="user"
                    onKeyPress={this.handleKeyPress.bind(this)}
				/>
				{this.renderButton()}
			</div>
		);
	}
}

export default Search;
