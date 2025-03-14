import { $host, $authHost } from "./index";
import { jwtDecode } from 'jwt-decode';

function removeEmpty(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != ''));
}


export const registration = async (email, phone, password, passwordCheck, FIO, address) => {
    try {
        phone = phone.split("+7")[1].split("(")
        let phone1 = phone[1].split(")")[0]
        let phone2 = phone[1].split(")")[1].split("-")
        phone = phone1 + phone2[0] + phone2[1] + phone2[2]
        console.log(phone)
        const { data } = await $host.post('auth/registration', { FIO, phone, email, password, passwordCheck, address })
        localStorage.setItem('token', data.token)
        return jwtDecode(data.token)
    } catch (error) {
        alert(error.response.data.message)
        return
    }
}

export const login = async (email, password) => {
    try {
        const { data } = await $host.post('auth/login', { email, password })
        localStorage.setItem('token', data.token)
        return jwtDecode(data.token)
    } catch (error) {
        alert(error.response.data.message)
        return
    }
}

export const getAllManuf = async () => {
    try {
        const { data } = await $authHost.get('manufacturer/get')
        return data
    } catch (error) {
        alert(error.response.data.message)
        return
    }
}

export const updatePhone = async (phone) => {
    try {
        const { data } = await $authHost.patch('manufacturer/patch', {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            data: { phone: phone }
        })
        return data
    } catch (error) {
        alert(error.response.data.message)
        return
    }
}

export const destroyUser = async () => {
    try {
        const { data } = await $authHost.delete('manufacturer/delete', null, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
        )
        return data
    } catch (error) {
        alert(error.response.data.message)
        return
    }
}


export const findOneUser = async () => {
    try {
        const { data } = await $authHost.post('user/findOne', null, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
        )
        console.log(data)
        return data
    } catch (error) {
        alert(error.response.data.message)
        return
    }
}

export const changeProfile = async (FIO, phone, email, address, password, checkPassword) => {
    try {
        let obj = { FIO: FIO, phone: phone, email: email, address: address, password: password, checkPassword: checkPassword }
        obj = removeEmpty(obj)
        const { data } = await $authHost.patch('user/patch', {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            data: obj
        })
        return data
    } catch (error) {
        alert(error.response.data.message)
        return
    }
}