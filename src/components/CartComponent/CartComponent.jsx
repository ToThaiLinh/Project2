import React from 'react'
import {StyleNameProduct, WrapperCartStyle, WrapperPriceDiscountText, WrapperPriceText, WrapperReportText} from './style'
import { StarFilled } from '@ant-design/icons'
const CartComponent = () => {
    return (
        <WrapperCartStyle
        hoverable
        style={{ width: 240, padding: '10px'}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <StyleNameProduct>dBánh Mì</StyleNameProduct>
        <WrapperReportText>
            <span style={{marginRight: '4px'}}>
                <span>4.96</span>
                <StarFilled style={{fontSize: '12px', color: 'yellow'}}/>
            </span>
            
            <span> | Đã bán 1000+</span>
        </WrapperReportText>
        <WrapperPriceText>
            <span style={{marginRight: '8px'}}>1.000.000$</span>
            <WrapperPriceDiscountText>
                -5%
            </WrapperPriceDiscountText>
        </WrapperPriceText>
      </WrapperCartStyle>
    )
}

export default CartComponent;