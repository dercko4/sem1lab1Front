import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllManuf, login } from "../http/userAPI"
import { observer } from "mobx-react-lite";
import { MAKE_REQUEST_ROUTE } from "../utils/consts";
import { Button, Form } from "react-bootstrap"
import { Context } from "../index";

const Auth = observer(() => {
    document.body.style.backgroundColor = "#faeedd"
    const { user } = useContext(Context)
    const { UserRequest } = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const [password, setPassword] = useState('')
    const [FIO, setFIO] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')
    const [address, setAddress] = useState('')
    const submit = async () => {
        try {
            const response = await login(email, password)
            if (!response) return
            user.setUser()
            user.setIsAuth(true)
            navigate(MAKE_REQUEST_ROUTE)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    const getAll = async () => {
        const response = await getAllManuf()
        return response
    }

    useEffect(() => {
        getAll().then(data => { UserRequest.setUserRequest(data) })
    }, [])
    return (
        <>
            <Form className="d-flex flex-column" style={{ justifyContent: "center" }}>

                <Form.Control

                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ваш email..."
                />

                <Form.Control
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ваш пароль..."
                />
                <Button
                    variant={"outline-dark"}
                    size="lg"
                    onClick={submit}>
                    Войти
                </Button>

            </Form>
        </>
    );
})

export default Auth;