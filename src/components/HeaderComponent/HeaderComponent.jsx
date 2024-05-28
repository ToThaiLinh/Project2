import React from 'react'
import { Badge, Col ,Input} from 'antd';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style';
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined 
  } from '@ant-design/icons';
import { useNavigate, useNavigation } from 'react-router-dom';

const HeaderComponent = () => {
    const { Search } = Input;
    const onSearch = (value, _e, info) => console.log(info?.source, value);

    const navigate = useNavigate();
    const handleNavigateLogin = () => {
        navigate('/sign-in')
    }

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
                <WrapperHeaderAccount>
                    <UserOutlined style={{fontSize: '30px'}}/>
                    <div onClick={handleNavigateLogin} style={{cursor: 'pointer'}}>
                        <span>Đăng nhập/Đăng ký</span>
                        <div>
                            <span>Tài khoản</span>
                            <CaretDownOutlined />
                            
                        </div>
                        
                    </div>
                </WrapperHeaderAccount>
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