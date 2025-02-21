import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllManuf, login, changeProfile } from "../http/userAPI"
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
    const submit = async (FIO, phone, email, address, password, checkPassword) => {
        try {
            const response = await changeProfile(FIO, phone, email, address, password, checkPassword)
            if (!response) return
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    return (
        <>
            <Form className="d-flex flex-column" style={{ justifyContent: "center" }}>
                <Form.Control
                    placeholder="Новое ФИО..."
                    value={FIO}
                    onChange={(e) => setFIO(e.target.value)}
                />
                <Form.Control
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Новый телефон..."
                />
                <Form.Control

                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Новый email..."
                />
                <Form.Control
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Новый адрес..."
                />
                <Form.Control
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Новый пароль..."
                />
                <Form.Control
                    value={passwordCheck}
                    onChange={(e) => setPasswordCheck(e.target.value)}
                    placeholder="Новый пароль еще раз..."
                />
                <Button onClick={()=> submit(FIO, phone, email, address, password, passwordCheck)}>
                    Подтвердить
                </Button>
            </Form>
        </>
    );
})

export default Auth;