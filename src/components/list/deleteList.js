import ListGroup from "react-bootstrap/ListGroup";
import { observer } from "mobx-react-lite";
import { Button, Col } from "react-bootstrap";
import { destroyUser, getAllUsers } from "../../http/userAPI";
import { useContext} from "react";
import { Context } from "../../index";

const AdminList = observer(({ user }) => {
    const { userRequest } = useContext(Context)
    const deleteUser = async (id_user) => {
        try {
            const response = await destroyUser(id_user)
            await getAllUsers().then(data=> {userRequest.setUserRequest(data)})
            return response
        } catch (error) {
            alert(error)
            console.log(error)
        }
    }
    return (
        <ListGroup style={{
            display: "flex", borderRadius: "0 px", maxWidth: "1000px", justifyContent: "center",
            marginLeft: 15, color: '#FFFFFF4D',
            overflow: 'scroll', height: "500px", marginTop: "10px"
        }}>
            {
                user.map((data) => (
                    <ListGroup.Item key={data.id_user} style={{
                        backgroundColor: '#FFFFFF4D', display: "flex", borderRadius: "0 px",
                        maxWidth: "1000px", justifyContent: "center", marginTop: "10px"
                    }}>

                        <Col style={{

                        }}>
                            <p>{data.id_user}</p>
                            <p>{data.FIO}</p>
                            <Button onClick={()=> {deleteUser(data.id_user)}}>УДАЛИТЬ</Button>
                        </Col>
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    )
})

export default AdminList;