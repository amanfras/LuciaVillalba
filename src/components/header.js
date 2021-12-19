import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';
import history from '../history';

class Header extends Component { 

    handleOnClick = (link) => {
        this.props.changeHeaderActive(link._id)
        if(this.props.onClick) {
            this.props.onClick(link._id);
        }
        history.push(link.path);
    }

    render() {
        return (
            <div className='header'>
                <img className='header__img' src="/assets/Logo.png"/>
                
                <div className='header__navbar'>
                    {
                        this.props.headerLinks.map((link, index) => {
                            return (
                                <a className={`header__link ${link.active ? 'orange-text' : ''}`} key={index} onClick={() => this.handleOnClick(link)}>                               
                                    {link.title}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const{ headerLinks, onClick } = state.headerfooter;
    return {
        headerLinks,
        onClick
    }
}

Header = connect(mapStateToProps, actions)(Header);

export default Header;