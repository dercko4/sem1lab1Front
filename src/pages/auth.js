import React, { useState } from "react";
import { login, } from "../http/userAPI"
import { observer } from "mobx-react";
import { PROFILE_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { Button, Container, Form, Nav } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";


export const Auth = observer(() => {
    document.body.style.backgroundColor = "#FFFFFF"
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const submit = async () => {
        try {
            const response = await login(email, password)
            console.log(localStorage.getItem("token"))
            if (!response) return
            navigate(PROFILE_ROUTE)
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
                    display: "flex", justifyContent: "center",
                    alignItems: "center", backgroundColor: "#66A4E1", width: "1270px", opacity: "70%",
                    height: "670px", borderRadius: "30px", border: "1px outset black"
                }}>
                    <Form>

                        <Form.Control
                            style={{
                                backgroundColor: "#D9D9D9", opacity: "80%", border: "1px solid black", borderRadius: "15px",
                                height: "70px", width: "670px", paddingLeft: "28px", fontSize: "32px", fontFamily: "Jost, normal"
                            }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ваш email..."
                        />

                        <Form.Control
                            style={{
                                backgroundColor: "#D9D9D9", opacity: "80%", border: "1px solid black", borderRadius: "15px",
                                height: "70px", width: "670px", paddingLeft: "28px", fontSize: "32px", fontFamily: "Jost, normal",
                                marginTop: 80
                            }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} z
                            placeholder="Ваш пароль..."
                        />
                        <Button
                            variant={"outline-dark"}
                            style={{
                                backgroundColor: "#43D248", width: "200px", height: "70px",
                                borderRadius: "15px", border: "1px solid black", opacity: "58%",
                                color: "#1BFF0F", WebkitTextStrokeWidth: "3px", WebkitTextStroke: "0.025em black", fontSize: "28px",
                                fontFamily: "Jost, normal", marginTop: "110px", marginLeft: "235px"
                            }}
                            size="lg"
                            type="button"
                            onClick={submit}>
                            Войти
                        </Button>
                        <Nav style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Nav.Item style={{ fontFamily: "Jost, normal", color: "#E5CD42", fontSize: "28px" }}>
                                Нет аккаунта? <Nav.Link style={{
                                    padding: "0 0",
                                    display: "inline", color: "#1BFF0F", fontSize: "28px", fontFamily: "Jost, normal"

                                }}
                                    href={REGISTRATION_ROUTE}>Зарегистрироваться</Nav.Link>
                            </Nav.Item>
                        </Nav>

                    </Form>
                </Container>
            </Container>

        </>
    );
})


