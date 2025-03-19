import React, { useEffect, useContext } from "react";
import { getAllUsers } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import AdminList from "../components/list/deleteList";
import { Context } from "../index";



const DeleteUser = observer(() => {
    document.body.style.backgroundColor = "#faeedd"
    const { userRequest } = useContext(Context)
    const getAllUsers1 = async () => {
        try {
            const response = await getAllUsers()
            return response
        } catch (error) {
            alert(error)
            console.log(error)
        }
    }
    useEffect(() => {
        getAllUsers1().then((data) => userRequest.setUserRequest(data))
    }, [])
    return (
        <>
            <AdminList user={userRequest.getUserRequest()}/>
        </>
    );
})

export default DeleteUser;