import React from 'react'
import {Input, Button} from 'antd'
import {
    SearchOutlined
} from '@ant-design/icons';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonInputSearch = (props) => {
    const {size, placeholder, textButton,
        bordered, backgroundColorInput= "#fff",
        backgroundColorButton="#fff",
        colorButton="#fff"

    } = props
    return (
        <div style={{display: 'flex'}}>
            <InputCompoment 
                size={size} 
                placeholder={placeholder} 
                bordered={bordered}
                style={{backgroundColor: backgroundColorInput}}
            />
            <ButtonComponent
                size = {size} 
                styleButton={{background: backgroundColorButton, border: !bordered && 'none'}}
                icon={<SearchOutlined color={colorButton} style={{color: '#fff'}}/> } 
                textButton={textButton}
                styleTextButton={{color: colorButton}}
                
            >
            </ButtonComponent>
        </div>
    )
}

export default ButtonInputSearch