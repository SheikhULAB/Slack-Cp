import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from '../../firebase';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import './Login.css';

const Login = () => {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
       auth
          .signInWithPopup(provider)
          .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
          })
          .catch (error => {
              alert(error.message);
          })

    }
    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://logos-world.net/wp-content/uploads/2020/10/Slack-Logo.png" alt="" />
                <h1>Sign in to Slack App</h1>
                <p>sheikhyeamin.slack.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    );
};

export default Login;