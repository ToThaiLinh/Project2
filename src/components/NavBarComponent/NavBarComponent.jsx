import React from 'react'
import { WrapperContent, WrapperLableText, WrapperTextValue } from './style'
import { Checkbox, Rate} from 'antd'
import { v4 as uuidv4 } from 'uuid';

const NavBarComponent = () => {
    const renderContent = (type, options) => {
        switch(type) {
            case 'text':
                return options.map( option => {
                    return (
                        <div>
                            <WrapperTextValue key={option}>option</WrapperTextValue>
                        </div>
                    
                    )
                })
            case 'checkbox':
                return <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} >
                    {options.map(option => {
                        return <Checkbox style={{marginLeft: '0px'}} key={option.value} value={option.value}>{option.lable}</Checkbox>
                    })}
                    
              </Checkbox.Group>
            
            case 'star':
                return options.map(value => {
                        return (
                        <div style={{display: 'flex', gap: '4px' }}>
                        <Rate key={value} style={{fontSize: '12px'}} disabled defaultValue={value} />
                        <span>{`từ ${value} sao`}</span>
                        </div>
                )});
            case 'price':
                return  options.map(option => {
                    return (
                        <div key={uuidv4()} style={{padding: '4px',color: 'rgb(56, 56, 61)', borderRadius: '10px', backgroundColor: 'rgb(238, 238, 238)' ,width: 'fit-content'}}>
                            {option}                     
                        </div>
                    )
                })   
            default:
                return {}
        }
    }
    return (
        <div>
            <WrapperLableText key={uuidv4()}>Lable</WrapperLableText>
            <WrapperContent key={uuidv4()}>
            {renderContent('text',['Bánh mì', 'trà sữa', 'Cơm rang' ] )}
            </WrapperContent>
            <WrapperContent key={uuidv4()}>
            {renderContent('checkbox',[
                {value: 'a', lable: 'A'},
                {value: 'b', lable: 'B'}
            ] )}
            </WrapperContent>
            <WrapperContent key={uuidv4()}>
            {renderContent('star',[3, 4, 5] )}
            </WrapperContent>
            <WrapperContent key={uuidv4()}>
            {renderContent('price',['duoi 40.000', 'tren 50.000'] )}
            </WrapperContent>
        </div>
    )
}

export default NavBarComponent