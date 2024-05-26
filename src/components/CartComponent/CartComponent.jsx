import React from 'react'
import { Card } from 'antd';
import {StyleNameProduct, WrapperCartStyle, WrapperPriceDiscountText, WrapperPriceText, WrapperReportText} from './style'
import { StarFilled } from '@ant-design/icons'
const CartComponent = () => {
    const { Meta } = Card;
    return (
        <WrapperCartStyle
        hoverable
        style={{ width: 240}}
        bodySyle={{padding: '10px'}}
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
            1.000.000$
            <WrapperPriceDiscountText>
                -5%
            </WrapperPriceDiscountText>
        </WrapperPriceText>
      </WrapperCartStyle>
    )
}

export default CartComponent;