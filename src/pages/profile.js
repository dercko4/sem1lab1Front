import React, { useState, useEffect, useContext } from "react";
import { changeProfile, findOneUser } from "../http/userAPI"
import { observer } from "mobx-react-lite";
import { LOGIN_ROUTE } from "../utils/consts";
import MaskedFormControl from 'react-bootstrap-maskedinput'
import { Button, Form, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { Context } from "../index";



const Profile = observer(() => {
    document.body.style.backgroundColor = "#faeedd"
    const [password, setPassword] = useState('')
    const [FIO, setFIO] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')
    const [address, setAddress] = useState('')
    const navigate = useNavigate()
    const { userRequest } = useContext(Context)
    const submit = async () => {
        try {
            if (password != passwordCheck) {
                alert("Пароли не совпадают!")
                return
            }
            const response = await changeProfile(FIO, phone, email, address, password, passwordCheck)
            if (!response) return
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    const exit = async () => {
        try {
            localStorage.removeItem("token")
            navigate(LOGIN_ROUTE)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    const findOneUser1 = async () => {
        try {
            const response = await findOneUser()
            return response
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }


    useEffect(() => {
        findOneUser1().then((data) => userRequest.setUserRequest(data))
    }, [])

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
                            placeholder={userRequest.getUserRequest().FIO}
                        />

                        <Form.Control
                            style={{
                                backgroundColor: "#D9D9D9", opacity: "80%", border: "1px solid black", borderRadius: "15px",
                                height: "70px", width: "520px", paddingLeft: "28px", fontSize: "32px", fontFamily: "Jost, normal",
                                marginTop: "40px", display: "inline-block", marginLeft: "62px",
                            }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={userRequest.getUserRequest().email}
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
                            placeholder={userRequest.getUserRequest().phone}

                        />
                        <Form.Control
                            style={{
                                backgroundColor: "#D9D9D9", opacity: "80%", border: "1px solid black", borderRadius: "15px",
                                height: "70px", width: "520px", paddingLeft: "28px", fontSize: "32px", fontFamily: "Jost, normal",
                                marginTop: "40px", display: "inline-block", marginLeft: "62px",
                            }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Новый пароль..."
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
                            Обновить
                        </Button>
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
                            onClick={exit}>
                            Выйти
                        </Button>
                    </Form>
                </Container>
            </Container>

        </>
    );
})

export default Profile;