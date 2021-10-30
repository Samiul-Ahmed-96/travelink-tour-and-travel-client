import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import googleLogo from '../../Images/google.png';
import './Login.css';

const Login = () => {
    


    const {signInUsingGoogle,setUser,setIsLoading,setError} = useAuth();


    const history= useHistory()
    const location = useLocation()

    const url= location.state?.from || "/home"

    const handleSignIn = () =>{
        signInUsingGoogle()
        .then(res => {
            setIsLoading(true)
            setUser(res.user)
            history.push(url)
        })
        .catch(err => setError(err))
        .finally(()=>{
            setIsLoading(false)
        })
    }

    return (
        <Container>
            <Row>
                <div className="google-login">
                    <img src={googleLogo} alt="" />
                    <button onClick={handleSignIn}> <i class="fab fa-google"></i> login</button>
                </div>
            </Row>
        </Container>
    );
};

export default Login;