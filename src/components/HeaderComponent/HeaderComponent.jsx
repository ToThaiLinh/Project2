import React, { useState } from 'react'
import { Badge, Col ,Input, Popover} from 'antd';
import { WrapperContentPopup, WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style';
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined 
  } from '@ant-design/icons';
import { useNavigate, useNavigation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from '../../services/UserService'
import {resetUser} from '../../redux/slices/userSlice'
import Loading from '../../components/LoadingComponent/LoadingComponent'

const HeaderComponent = () => {
    const { Search } = Input;
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const user = useSelector(state => state.user)

    const navigate = useNavigate();
    const handleNavigateLogin = () => {
        navigate('/sign-in')
    }

    const handleLogout = async () => {
        setLoading(true)
        await UserService.logoutUser();
        dispatch(resetUser())
        setLoading(false)
    }

    const content = (
        <div>
          <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
          <WrapperContentPopup>Thông tin người dùng</WrapperContentPopup>
        </div>
      );

    return (
        <div style={{width: '100%', background: '#FFCC00', display: 'flex', justifyContent: 'center'}}>
            <WrapperHeader gutter={16}>
            <Col span={5}>
                <WrapperTextHeader>DOUBLELINH</WrapperTextHeader>
            </Col>
                
            <Col span={13}>
            <Search
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                />
            </Col>
            <Col span={6} style={{display: 'flex', gap: '20px'}}>
                <Loading isPending={loading}>
                <WrapperHeaderAccount>
                    <UserOutlined style={{fontSize: '30px'}}/>
                    {user?.name ? (
                        <>
                        
                        <Popover content={content} trigger="click">
                            <div style={{cursor: 'pointer'}}>{user?.name}</div>
                        </Popover>
                        </>
                    ) : (
                    <div onClick={handleNavigateLogin} style={{cursor: 'pointer'}}>
                        <span>Đăng nhập/Đăng ký</span>
                        <div>
                            <span>Tài khoản</span>
                            <CaretDownOutlined />
                            
                        </div>
                        
                    </div>
                    )}
                </WrapperHeaderAccount>
                </Loading>
                <div>
                    <Badge count={4} size="small">
                        <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff'}}/>
                    </Badge>
                    <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                </div>
            </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent