import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';


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
                <button onClick={handleSignIn}>login</button>
            </Row>
        </Container>
    );
};

export default Login;