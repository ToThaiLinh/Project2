import React, { useState } from 'react'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { WrapperContainerLeft, WrapperTextLight } from './style'
import {EyeFilled, EyeInvisibleFilled} from '@ant-design/icons'
const SignInPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    return (
        <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center', background: '#ccc', height: '100vh'}}>
            <div style={{width: '400px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex', justifyContent: 'center'}}>
                <WrapperContainerLeft>
                <h1>Xin chào</h1>
                <p>Đăng nhập và tạo tài khoản</p>
                <InputForm style={{marginBottom: '10px'}} placeholder="abc@gmail.com"/>
                <div style={{position: 'relative'}}>
                    <span
                    style={{
                        zIndex: 10,
                        position: 'absolute',
                        top: '4px',
                        right: '8px'
                    }}>
                       {
                        isShowPassword ? (
                            <EyeFilled/>
                        ) : (
                            <EyeInvisibleFilled/>
                        )
                       } 
                    </span>
                    <InputForm style={{marginBottom: '10px'}} placeholder='Password' type={isShowPassword ? 'text' : 'password'}/>
                </div>
                <div style={{position: 'relative'}}>
                    <span
                    style={{
                        zIndex: 10,
                        position: 'absolute',
                        top: '4px',
                        right: '8px'
                    }}>
                       {
                        isShowPassword ? (
                            <EyeFilled/>
                        ) : (
                            <EyeInvisibleFilled/>
                        )
                       } 
                    </span>
                    <InputForm placeholder='Confirm Password' type={isShowPassword ? 'text' : 'password'}/>
                </div>
                <ButtonComponent
                    bordered={false}
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
                <p>Bạn đã có tài khoản? <WrapperTextLight> Đăng nhập</WrapperTextLight></p>
                </WrapperContainerLeft>
            </div>
        </div>
    )
}

export default SignInPage