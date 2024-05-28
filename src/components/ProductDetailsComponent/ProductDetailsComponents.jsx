import { Col, Image, Row } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/product1.jpg'
import { WrapperPriceProduct, WrapperPriceTextProduct, WrapperStyleNameProduct, WrapperStyleTextSell, WrapperAddressProduct, WrapperQuanlityProduct, WrapperInputNumber } from './style'
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ProductDetailsComponent = () => {
    const onChange = () => {}
    return (
       <Row style={{}}>
        <Col span={10}>
            <Image src={imageProduct} ald='image product' preview='false'/>
        </Col>

        <Col span={14} style={{paddingLeft: '16px'}}>
            <WrapperStyleNameProduct>Bún chả sinh tử - Hoàng Đạo Thúy</WrapperStyleNameProduct>
            <div>
                <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}}/>
                <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}}/>
                <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}}/>
                <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
            </div>
            <WrapperPriceProduct>
                <WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>
            </WrapperPriceProduct>
            <WrapperAddressProduct>
                <span>Giao đến</span>
                <span className='address'>Phương Mai, Đống Đa, Hà Nội</span>
                <span className='change-address'>Đổi địa chỉ</span>
            </WrapperAddressProduct>
            <div style={{margin: '10px 0 20px',padding: '10px 0', borderTop: '1px solid #ccc', borderBottom: 'none'}}>
                <div style={{marginBottom: '6px'}}>Số lượng</div>
                <WrapperQuanlityProduct>
                    <button style={{border: 'none', background: 'transparent'}}>
                        <MinusOutlined style={{color: '#000'}} fontSize='20px'/>
                    </button>
                        <WrapperInputNumber min={1} max={10} defaultValue={1} onChange= {onChange} size='small'/>
                    <button style={{border: 'none', background: 'transparent'}}>
                        <PlusOutlined style={{color: '#000'}}i fontSize='20px'/>
                    </button>
                </WrapperQuanlityProduct>
            </div>
            <div>
                <ButtonComponent
                    size={40}
                    styleButton={{background: 'rgb(255, 57, 69)',
                        height: '48px',
                        width: '220px',
                        border: 'none',
                        borderRadius: '4px'
                    }}
                    textButton={'Chọn mua'}
                    styleTextButton={{color: '#fff'}}
                >
                    
                </ButtonComponent>
            </div>
        </Col>
       </Row>
    )
}

export default ProductDetailsComponent