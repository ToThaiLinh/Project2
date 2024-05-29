import axios from "axios"

export const loginUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_USER_SIGN_IN}`, data)
    return res.data
}

export const signUpUser = async (data) => {
    console.log(process.env.REACT_APP_USER_SIGN_UP)
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-up`, data)
    return res.data
}