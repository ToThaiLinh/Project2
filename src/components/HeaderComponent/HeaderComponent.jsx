import React from 'react'
import { Col ,Input} from 'antd';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style';
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined 
  } from '@ant-design/icons';

const HeaderComponent = () => {
    const { Search } = Input;
    const onSearch = (value, _e, info) => console.log(info?.source, value);

    return (
        <div>
            <WrapperHeader gutter={16}>
            <Col span={6}>
                <WrapperTextHeader>DOUBLELINH</WrapperTextHeader>
            </Col>
                
            <Col span={12}>
            <Search
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                />
            </Col>
            <Col span={6} style={{display: 'flex', gap: '20px'}}>
                <WrapperHeaderAccount>
                    <UserOutlined style={{fontSize: '30px'}}/>
                    <div>
                        <span>Đăng nhập/Đăng ký</span>
                        <div>
                            <span>Tài khoản</span>
                            <CaretDownOutlined />
                            
                        </div>
                        
                    </div>
                </WrapperHeaderAccount>
                <div>
                    <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff'}}/>
                    <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                </div>
            </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent