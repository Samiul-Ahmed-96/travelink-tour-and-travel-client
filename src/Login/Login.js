import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <Container>
            <Row>
                <button onClick={signInUsingGoogle}>login</button>
            </Row>
        </Container>
    );
};

export default Login;