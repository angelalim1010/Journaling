import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    // Register User
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('https://zenyu-backend.herokuapp.com/api/users/register', formData, config);
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: res.data
            });

        } catch (err) {
            dispatch({
                type: SIGNUP_FAIL,
                payload: err.response.data.msg
            });
        }
    };

    // Login User
    const login = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('https://zenyu-backend.herokuapp.com/api/users/authenticate', formData, config);
            const bearerToken = res.data.jwt;
            setAuthToken(bearerToken);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });

        } catch(err) {
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data.msg
            });
        }
    };

    // Logout
    const logout = () => {
        dispatch({ type: LOGOUT })
    };

    // Clear Errors
    const clearErrors = () => dispatch( {type: CLEAR_ERRORS });

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                register,
                login,
                logout,
                clearErrors
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;