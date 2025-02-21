import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { destroyUser, getAllManuf, login, updatePhone } from "../http/userAPI"
import { observer } from "mobx-react-lite";
import { MAKE_REQUEST_ROUTE } from "../utils/consts";
import { Button, Container, Form } from "react-bootstrap"
import { Context } from "../index";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';



const Auth = observer(() => {
    document.body.style.backgroundColor = "#FFFFFF"
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const { UserRequest } = useContext(Context)
    const [showModal, setShowModal] = useState(false);
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
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Ваш пароль..."
                        />
                        <Button
                            variant={"outline-dark"}
                            style={{backgroundColor: "#43D248", width: "200px", height: "70px", borderRadius: "15px", border: "1px solid black", opacity: "58%"}}
                            size="lg"
                            onClick={submit}>
                            Войти
                        </Button>

                    </Form>
                </Container>
            </Container>

        </>
    );
})

export default Auth;


{/* <Form className="d-flex flex-column" style={{ justifyContent: "center", marginTop: 100 }}>
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
                        style={{ marginTop: 300 }}
                        size="lg"
                        onClick={() => setShowModal(true)}>
                        Уничтожить себя 0_0
                    </Button>

                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Рил хочешь? (дурак?)</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Вы уверены, что РЕАЛЬНО ХОТИТЕ УНИЧТОЖИТЬ себя?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowModal(false)}>
                                НЕТ, ПОЖАЛУЙСТА
                            </Button>
                            <Button variant="danger"
                                onClick={() => {
                                    deleteSelf()
                                    setShowModal(false)
                                }}>
                                ДАААА
                            </Button>

                        </Modal.Footer>
                    </Modal> */}