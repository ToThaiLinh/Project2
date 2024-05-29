import React, { useEffect, useState } from 'react'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { WrapperContainerLeft, WrapperTextLight } from './style'
import {EyeFilled, EyeInvisibleFilled} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHooks'
import Loading from '../../components/LoadingComponent/LoadingComponent'
import * as message from '../../components/Message/Message'
import { jwtDecode } from "jwt-decode";
import {useDispatch} from 'react-redux'
import { updateUser } from '../../redux/slices/userSlice'

const SignInPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleOnChangeEmail = (value) => {
        setEmail(value)
    }

    const handleOnChangePassword = (value) => {
        setPassword(value)
    } 

    const navigate = useNavigate()
    const handleNavigateSignUp = () => {
        navigate('/sign-up')
    }

    const mutation = useMutationHooks(
        data => UserService.loginUser(data)
    )

    const {data, isPending, isSuccess} = mutation

    useEffect(() => {
        if(isSuccess) {
            navigate('/')
            localStorage.setItem('access_token', data?.access_token)
            if(data?.access_token) {
                const decoded = jwtDecode(data?.access_token);
                if(decoded?.id) {
                    handleGetDetailUser(decoded?.id, data?.access_token)
                }
            }
            
        }
    },[isSuccess])

    const handleGetDetailUser = async (id, token) => {
        const res = await UserService.getDetailsUser(id, token)
        dispatch(updateUser({...res?.data, access_token: token}))
    }

    const handleSignIn = () => {
        mutation.mutate({
            email,
            password
        })
    }

    return (
        <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center', background: '#ccc', height: '100vh'}}>
            <div style={{width: '400px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex', justifyContent: 'center'}}>
                <WrapperContainerLeft>
                <h1>Xin chào</h1>
                <p>Đăng nhập và tạo tài khoản</p>
                <InputForm style={{marginBottom: '10px'}} placeholder="abc@gmail.com" value={email} onChange={handleOnChangeEmail}/>
                <div style={{position: 'relative'}}>
                    <span
                    onClick={() =>setIsShowPassword(!isShowPassword) }
                    style={{
                        zIndex: 10,
                        position: 'absolute',
                        top: '4px',
                        right: '8px',
                        cursor: 'pointer'
                    }}>
                       {
                        isShowPassword ? (
                            <EyeFilled/>
                        ) : (
                            <EyeInvisibleFilled/>
                        )
                       } 
                    </span>
                    <InputForm placeholder='Password' type={isShowPassword ? 'text' : 'password'} value={password} onChange={handleOnChangePassword}/>
                </div>
                {data?.status === 'ERR' && <span style={{color: 'red'}}>{data?.message}</span>}
                <Loading isPending={isPending}>
                <ButtonComponent
                    disabled={!email.length || !password}
                    onClick={handleSignIn}
                    size={40}
                    styleButton={{
                        background: 'rgb(255, 57, 69)',
                        height: '48px',
                        width: '100%',
                        border: 'none',
                        borderRadius: '4px',
                        margin: '26px 0 10px'
                    }}
                    textButton={'Đăng nhập'}
                    styleTextButton={{color: '#fff', fontSize: '15px', fontWeight: '700'}}
                >
                </ButtonComponent>
                </Loading>
                <p><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></p>
                <p>Chưa có tài khoản? <WrapperTextLight onClick={handleNavigateSignUp}> Tạo tài khoản</WrapperTextLight></p>
                </WrapperContainerLeft>
            </div>
        </div>
    )
}

export default SignInPage