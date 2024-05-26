import React from 'react'
import {Input, Button} from 'antd'
import {
    SearchOutlined
} from '@ant-design/icons';

const ButtonInputSearch = (props) => {
    const {size, placeholder, textButton,
        bordered, backgroundColorInput= "#fff",
        backgroundColorButton="#fff",
        colorButton="#fff"

    } = props
    return (
        <div style={{display: 'flex'}}>
            <Input 
                size={size} 
                placeholder={placeholder} 
                bordered={bordered} 
                style={{backgroundColor: backgroundColorInput}}
            />
            <Button 
                size = {size} 
                icon={<SearchOutlined color={colorButton}/> } 
                bordered={bordered}
                
                
            >
            <span style={{backgroundColor: backgroundColorButton}}>{textButton}</span>       
            </Button>
        </div>
    )
}

export default ButtonInputSearch