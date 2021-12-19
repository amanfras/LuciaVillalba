import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';
import history from '../history';

class Footer extends Component {
    handleOnClick = (link) => {
        this.props.changeFooterActive(link._id)
        if(this.props.onClick) {
            this.props.onClick(link._id);
        }
        history.push(link.path);
    }

    render() {
        return (
            <div className='footer'>
                <div className='footer__space'></div>
                
                <div className='footer__navbar'>
                    {
                        this.props.footerLinks.map((link, index) => {
                            return (
                                <a className={`footer__link ${link.active ? 'orange-text' : ''}`} key={index} onClick={() => this.handleOnClick(link)}>                                
                                    {link.title}
                                </a>
                            )
                        })
                    }
                </div>

                <div className="footer__copyright">
                    &copy; 2021 Adela Mansanet Frasquet &#124; Todos los derechos reservados
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const{ footerLinks, onClick } = state.headerfooter;
    return {
        footerLinks,
        onClick
    }
}

Footer = connect(mapStateToProps, actions)(Footer);

export default Footer;