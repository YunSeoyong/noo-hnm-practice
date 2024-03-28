import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = ({
    setAuthenticate,
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginUser = (e) => {
        if(email === '' || password === '') {
            alert('Email과 password를 입력해주세요.');
            return;
        };
        e.preventDefault();
        setAuthenticate(true);
        navigate(-1);
    };


    return (
        <Container className="login">
            <Form onSubmit={(e) => {loginUser(e)}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="E-mail을 작성해 주세요." value={email} onChange={(e) => {setEmail(e.target.value)}} />
                    <Form.Text className="text-muted">
                        저희 H&M은 절대 고객의 개인정보를 공개 및 공유하지 않습니다.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="비밀번호를 작성해 주세요." value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="로봇이 아닙니다." />
                </Form.Group>
                <Button variant="danger" type="submit">
                    LogIn
                </Button>
            </Form>
        </Container>
    );
};

export default Login;