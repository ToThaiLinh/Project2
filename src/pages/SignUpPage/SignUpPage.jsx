import React, { useEffect, useState } from 'react'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { WrapperContainerLeft, WrapperTextLight } from './style'
import {EyeFilled, EyeInvisibleFilled} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useMutationHooks } from '../../hooks/useMutationHooks'
import * as UserService from '../../services/UserService'
import Loading from '../../components/LoadingComponent/LoadingComponent'
import * as message from '../../components/Message/Message'

const SignInPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleOnChangeEmail = (value) => {
        setEmail(value)
    }

    const handleOnChangePassword = (value) => {
        setPassword(value)
    } 

    const handleOnChangeConfirmPassword = (value) => {
        setConfirmPassword(value)
    } 

    const mutation = useMutationHooks(
        data => UserService.signUpUser(data)
    )
    console.log(mutation)
    const {data, isPending, isSuccess, isError} = mutation
    
    useEffect(() => {
        if(isSuccess) {
            message.success()
            handleNavigateSignIn()
        }
        else if(isError) {
            message.err()
        }
    },[isSuccess, isError])

    const handleSignUp = () => {
        mutation.mutate({
            email,
            password,
            confirmPassword
        })
    }

    const navigate = useNavigate();
    const handleNavigateSignIn =() => {
        navigate('/sign-in')
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
                    onClick={() => setIsShowPassword(!isShowPassword)}
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
                    <InputForm style={{marginBottom: '10px'}} placeholder='Password' type={isShowPassword ? 'text' : 'password' } value={password} onChange={handleOnChangePassword}/>
                </div>
                <div style={{position: 'relative'}}>
                    <span
                    onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
                    style={{
                        zIndex: 10,
                        position: 'absolute',
                        top: '4px',
                        right: '8px',
                        cursor: 'pointer'
                    }}>
                       {
                        isShowConfirmPassword ? (
                            <EyeFilled/>
                        ) : (
                            <EyeInvisibleFilled/>
                        )
                       } 
                    </span>
                    <InputForm placeholder='Confirm Password' type={isShowConfirmPassword ? 'text' : 'password'} value={confirmPassword} onChange={handleOnChangeConfirmPassword}/>
                </div>
                {data?.status === 'ERR' && <span style={{color: 'red'}}>{data?.message}</span>}
                <Loading isPending={isPending}></Loading>
                <ButtonComponent
                    disabled={!email.length || !password || !confirmPassword}
                    onClick={handleSignUp}
                    size={40}
                    styleButton={{
                        background: 'rgb(255, 57, 69)',
                        height: '48px',
                        width: '100%',
                        border: 'none',
                        borderRadius: '4px',
                        margin: '26px 0 10px'
                    }}
                    textButton={'Đăng ký'}
                    styleTextButton={{color: '#fff', fontSize: '15px', fontWeight: '700'}}
                >
                </ButtonComponent>
                <p>Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigateSignIn}> Đăng nhập</WrapperTextLight></p>
                </WrapperContainerLeft>
            </div>
        </div>
    )
}

export default SignInPage