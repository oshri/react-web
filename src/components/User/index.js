import React from 'react';
import './User.css'

const User = (props) => {
    const { details }  = props
    
    if(details) {
        return (
            <div className="User card">
                <div className="wrapper" style={ {backgroundImage: `url(${details.avatar_url})`} }>
                    <div className="header">
                        <ul className="menu-content">
                            <li><a href={`https://github.com/${details.login}?tab=repositories`} target="_blank" rel="noopener noreferrer" className="fa fa-cubes">
                                <span>{details.public_repos}</span></a>
                            </li>
                            <li><a href={`https://github.com/${details.login}?tab=followers`} target="_blank" rel="noopener noreferrer" className="fa fa-heart">
                                <span>{details.followers}</span></a>
                            </li>
                            <li><a href={`https://github.com/${details.login}?tab=following`} target="_blank" rel="noopener noreferrer" className="fa fa-users">
                                <span>{details.following}</span></a>
                            </li>
                        </ul>
                    </div>
                    <div className="data">
                        <div className="content">
                        <div className="headerWrap">
                            <h1 className="title">
                                <a href={`https://github.com/${details.login}`} target="_blank" rel="noopener noreferrer">{details.name}</a>
                            </h1>
                            <span className="author">{details.company}</span>
                        </div>
                        <p className="text">{details.bio}</p>
                        <a href={`https://github.com/${details.login}`} target="_blank" rel="noopener noreferrer" className="button">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (<div></div>)
    }
};

export default User;