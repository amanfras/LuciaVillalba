import React, { Component } from 'react';
import axios from "axios";

import { connect } from 'react-redux';
import * as actions from '../actions';
import history from '../history';

class LogIn extends Component {
    constructor(props){
        super(props);

        this.state={
            emailauth:"",
            passwordauth:"",
            email:"",
            password: "",
            errorText: "",
            loggedInStatus: false
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        axios.get("https://lucia-nutricion-backend.herokuapp.com/user/get").then(response =>{
            this.setState({
                emailauth: response.data[0].email,
                passwordauth: response.data[0].password
            })
            if((this.state.email==this.state.emailauth) & (this.state.password==this.state.passwordauth)) {
                this.props.changeAuthIn(this.state.loggedInStatus);
                history.push('/');
            } else {
                this.setState({
                    errorText:"Email o contraseña incorrecta",
                });
                this.props.changeAuthOut(this.state.loggedInStatus);

            }

        }).catch(error => {
            this.setState({
                errorText: "An error ocurred",
            });
            this.props.changeAuthOut(this.state.loggedInStatus);
        })
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        })
    }

    render() {
        return (
            <div className='login'>
                <div className='login__title'>
                    Acceda a su interfaz
                </div>
                <form onSubmit={this.handleSubmit}  className='login__form'>
                    <div className='login__form__error'>{this.state.errorText}</div>
                    <div className='login__form__email'>
                        <i class="far fa-envelope"></i>
                        <input type="email" name="email" placeholder='Email' value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className='login__form__password'>
                        <i class="fas fa-lock"></i>
                        <input type="password" name="password" placeholder='Tu contraseña' value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className='login__form__button'>
                        <button type="submit">Entrar</button>
                    </div>
                </form>
            </div>
        );
    }
}

LogIn = connect(null, actions)(LogIn);

export default LogIn;