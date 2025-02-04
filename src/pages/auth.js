import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { destroyUser, getAllManuf, login, updatePhone } from "../http/userAPI"
import { observer } from "mobx-react-lite";
import { MAKE_REQUEST_ROUTE } from "../utils/consts";
import { Button, Form } from "react-bootstrap"
import { Context } from "../index";

const Auth = observer(() => {
    document.body.style.backgroundColor = "#faeedd"
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const { UserRequest } = useContext(Context)
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
        console.log(response)
        return response
    }

    const update = async (aboba) => {
        try {
            const response = await updatePhone(aboba)
            console.log(response)
            return response
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    const deleteSelf = async () => {
        try {
            const response = await destroyUser()
            console.log(response)
            return response
        } catch (error) {
            console.log(error)
            alert(error)
        }
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
                <Form className="d-flex flex-column" style={{ justifyContent: "center", marginTop: 100 }}>
                    <Form.Control

                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="На какой телефон изменить:"
                    />
                </Form>
                <Button
                    variant={"outline-dark"}
                    size="lg"
                    onClick={() => update(phone)}>
                    Изменить
                </Button>
                <Button
                    variant={"outline-dark"}
                    size="lg"
                    onClick={deleteSelf}>
                    Уничтожить себя 0_0
                </Button>
            </Form>
        </>
    );
})

export default Auth;