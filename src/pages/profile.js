import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { registration } from "../http/userAPI"
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { LOGIN_ROUTE } from "../utils/consts";
import MaskedFormControl from 'react-bootstrap-maskedinput'
import { Button, Form, Container, Nav } from "react-bootstrap"

const Profile = observer(() => {
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
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    return (
        <>
            <Container style={{
                height: "100vh", width: "100vw", justifyContent: "center", alignItems: "center", maxWidth: "100vw", maxHeight: "100vh",
                display: "flex", backgroundColor: "orange",
                background: "linear-gradient(to bottom right, rgba(167, 167, 220, 100) 0%, #8F90E9 50%, #8283F0)",
            }}>

                <Container style={{
                    backgroundColor: "#66A4E1", width: "1422px", opacity: "70%",
                    height: "750px", borderRadius: "30px", border: "1px outset black"
                }}>
                    <Form style={{ display: "inline-block" }} data-mdb-input-mask-init>

                        <Form.Control
                            style={{
                                backgroundColor: "#D9D9D9", opacity: "80%", border: "1px solid black", borderRadius: "15px",
                                height: "70px", width: "520px", paddingLeft: "28px", fontSize: "32px", fontFamily: "Jost, normal",
                                marginLeft: "80px", marginTop: "40px", display: "inline-block"
                            }}
                            value={FIO}
                            onChange={(e) => setFIO(e.target.value)}
                            placeholder="Введите ФИО..."
                        />

                        <Form.Control
                            style={{
                                backgroundColor: "#D9D9D9", opacity: "80%", border: "1px solid black", borderRadius: "15px",
                                height: "70px", width: "520px", paddingLeft: "28px", fontSize: "32px", fontFamily: "Jost, normal",
                                marginTop: "40px", display: "inline-block", marginLeft: "62px",
                            }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Введите email..."
                        />

                        <MaskedFormControl
                            
                            style={{
                                backgroundColor: "#D9D9D9", opacity: "80%", border: "1px solid black", borderRadius: "15px",
                                height: "70px", width: "520px", paddingLeft: "28px", fontSize: "32px", fontFamily: "Jost, normal",
                                marginLeft: "80px", marginTop: "40px", display: "inline-block",
                            }}
                            type="text"
                            value={phone}
                            mask="+7(111)111-11-11"
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+7(111)111-11-11"

                        />
                        <Form.Control
                            style={{
                                backgroundColor: "#D9D9D9", opacity: "80%", border: "1px solid black", borderRadius: "15px",
                                height: "70px", width: "520px", paddingLeft: "28px", fontSize: "32px", fontFamily: "Jost, normal",
                                marginTop: "40px", display: "inline-block", marginLeft: "62px",
                            }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Введите пароль..."
                        />

                        <Form.Control
                            style={{
                                backgroundColor: "#D9D9D9", opacity: "80%", border: "1px solid black", borderRadius: "15px",
                                height: "70px", width: "520px", paddingLeft: "28px", fontSize: "32px", fontFamily: "Jost, normal",
                                marginLeft: "80px", marginTop: "40px", display: "inline-block"
                            }}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Введите адрес..."
                        />

                        <Form.Control
                            style={{
                                backgroundColor: "#D9D9D9", opacity: "80%", border: "1px solid black", borderRadius: "15px",
                                height: "70px", width: "520px", paddingLeft: "28px", fontSize: "32px", fontFamily: "Jost, normal",
                                marginTop: "40px", display: "inline-block", marginLeft: "62px",
                            }}
                            value={passwordCheck}
                            onChange={(e) => setPasswordCheck(e.target.value)}
                            placeholder="Введите пароль ещё раз..."
                        />
                        <Button
                            variant={"outline-dark"}
                            style={{
                                backgroundColor: "#43D248", width: "408px", height: "70px",
                                borderRadius: "15px", border: "1px solid black", opacity: "58%",
                                color: "#1BFF0F", WebkitTextStrokeWidth: "3px", WebkitTextStroke: "0.025em black", fontSize: "28px",
                                fontFamily: "Jost, normal", marginTop: "110px", display: "flex", marginLeft: "430px",
                                justifyContent: "center", alignItems: "center",
                            }}
                            size="lg"
                            onClick={submit}>
                            Зарегистрироваться
                        </Button>
                        <Nav style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "0px" }}>
                            <Nav.Item style={{ fontFamily: "Jost, normal", color: "#E5CD42", fontSize: "28px" }}>
                                Есть акканут? <Nav.Link style={{
                                    padding: "0 0",
                                    display: "inline", color: "#1BFF0F", fontSize: "28px", fontFamily: "Jost, normal"

                                }}
                                    href={LOGIN_ROUTE}>Войти</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Form>
                </Container>
            </Container>

        </>
    );
})

export default Profile;