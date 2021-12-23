import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';
import axios from 'axios';
import Truncate from "react-truncate";
import { Link } from "react-router-dom";
import striptags from "striptags";


class Blog extends Component {
    constructor() {
        super();

        this.state = {
            blogItems: [],
            totalCount: 0,
            blogModalIsOpen: false
        };

        this.getBlogItems = this.getBlogItems.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleDeleteClick(id) {
        axios.delete(`https://lucia-nutricion-backend.herokuapp.com/delete/${id}`).then(response => {
            this.setState({
                blogItems: this.state.blogItems.filter(blogItem=>{
                    return id !== blogItem.id
                })
            })
            return response.data;
        }).catch(error => {
            console.log("delete error", error);
        })
    }

    getBlogItems() {
        this.setState({
            currentPage: this.state.currentPage + 1
        });

        axios
            .get('https://lucia-nutricion-backend.herokuapp.com/blog/get')
            .then(response => {
                this.setState({
                    blogItems: this.state.blogItems.concat(response.data),
                });
                console.log(this.state)
            })
            .catch(error => {
                console.log("getBlogItems error", error);
            });
    }

    componentDidMount() {
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
        this.getBlogItems();
      }
    

    render() {
        const blogRecords = this.state.blogItems.map(blogItem => {
            return(
                <div key={blogItem.id} className="blog">
                    <div className="blog__title">
                        <Link to = {`/blog/${blogItem.id}`} className='link'>
                            {blogItem.title}
                        </Link>
                    </div>
                    <img className='blog__image' src={blogItem.imagen}/>
                    <div className='blog__fecha'>
                        {blogItem.fecha}
                    </div>
                    <div className='blog__content'>
                        <Truncate lines={5} ellipsis={
                            <span>
                                ...<Link to= {`/blog/${blogItem.id}`} className='link'>Read more</Link>
                            </span>
                            }>
                            {striptags(blogItem.content)}
                        </Truncate>
                    </div>
                    {this.props.log.loggedInStatus === true ? <i class="far fa-trash-alt" onClick={() => this.handleDeleteClick(blogItem.id)} ></i>: null}
                    
                </div>
            )
        });

        return (
            <div className='Blog'>
                <div className="Blog__wrapper">
                    {blogRecords}
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

Blog = connect(mapStateToProps, actions)(Blog);

export default Blog;