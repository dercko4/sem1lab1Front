import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { registration } from "../http/userAPI"
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { MAKE_REQUEST_ROUTE } from "../utils/consts";
import { Button, Form } from "react-bootstrap"


const Registration = observer(() => {
    document.body.style.backgroundColor = "#faeedd"
    const { user } = useContext(Context)
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
            const response = await registration(email, phone, password, passwordCheck, FIO, address)
            if (!response) return
            user.setUser()
            user.setIsAuth(true)
            navigate(MAKE_REQUEST_ROUTE)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    return (
        <>
            <Form className="d-flex flex-column" style={{ justifyContent: "center" }}>
                <Form.Control
                    placeholder="Ваше ФИО..."
                    value={FIO}
                    onChange={(e) => setFIO(e.target.value)}
                />
                <Form.Control
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ваш телефон..."
                />
                <Form.Control
                    
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ваш email..."
                />
                <Form.Control
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Ваш адрес..."
                />
                <Form.Control
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ваш пароль..."
                />
                <Form.Control
                    value={passwordCheck}
                    onChange={(e) => setPasswordCheck(e.target.value)}
                    placeholder="Ваш пароль еще раз..."
                />
                
                <Button
                    variant={"outline-dark"}
                    size="lg"
                    onClick={submit}>
                    Зарегистрироваться
                </Button>

            </Form>
        </>
    );
})

export default Registration;