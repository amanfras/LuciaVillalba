import React, { Component } from 'react';
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { connect } from 'react-redux';
import * as actions from '../actions';
import history from '../history';

class BlogInfo extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          currentId: this.props.match.params.slug,
          blogItem: {},
          editMode: false
        };
    
        // this.handleEditClick = this.handleEditClick.bind(this);
        // this.handleFeaturedImageDelete = this.handleFeaturedImageDelete.bind(this);
        // this.handleUpdateFormSubmission = this.handleUpdateFormSubmission.bind(this);
    }


    componentDidMount() {
        axios.get(`https://lucia-nutricion-backend.herokuapp.com/blog/get/${this.state.currentId}`)
          .then(response => {
            this.setState({
              blogItem: response.data
            });
          })
          .catch(error => {
            console.log("getBlogItem error", error);
          });

          const headerLinks = [
            {
              _id: 0,
              title: 'INICIO',
              active: false,
              path: '/'
            },
            {
              _id: 1,
              title: 'SERVICIOS',
              active: false,
              path: '/servicios'
            },
            {
              _id: 2,
              title: 'SOBRE MI',
              active: false,
              path: '/sobre-mi'
              },
            {
            _id: 3,
            title: 'BLOG',
            active: true,
            path: '/blog'
            },
            {
            _id: 4,
            title: 'CONTACTO',
            active: false,
            path: '/contacto'
            }
          ]
      
          const footerLinks = [
            {
              _id: 0,
              title: 'POLÍTICA DE PRIVACIDAD',
              active: false,
              path: '/política-de-privacidad'
            },
            {
              _id: 1,
              title: 'OPINIONES',
              active: false,
              path: '/opiniones'
            }
          ]
      
          this.props.setHeaderLinks(headerLinks);
          this.props.setFooterLinks(footerLinks);
        }
      
    render() {
        return (
            <div className="bloginfo">
                    <div className="bloginfo__title">
                        {this.state.blogItem.title}
                    </div>
                    <img className='bloginfo__image' src={this.state.blogItem.imagen}/>
                    <div className='bloginfo__fecha'>
                        {this.state.blogItem.fecha}
                    </div>
                    <div className='bloginfo__content'>
                            {ReactHtmlParser(this.state.blogItem.content)}
                    </div>
                    <div className='bloginfo__back'>
                      <i class="fas fa-arrow-circle-left" on onClick={() =>history.push('/blog')}></i>
                    </div>
                </div>
        );
    }
}

function mapStateToProps(state) {
    const { headerLinks, footerLinks } = state.headerfooter;
    const log = state.auth
    return {
        log, headerLinks, footerLinks
    }
}

BlogInfo = connect(mapStateToProps, actions)(BlogInfo);

export default BlogInfo;