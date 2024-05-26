import React from 'react'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import { Col, Pagination, Row } from 'antd'
import CardComponent from '../../components/CartComponent/CartComponent'
import { WrapperNavBarProduct, WrapperProduct } from './style'

const TypeProductPage = () => {
    const onChange = () => {}
    return (
        <div style={{padding: '0 120px', background: '#efefef'}}>
            <Row style={{ flexWrap: 'nowrap', paddingTop: '10px'}}>
                <WrapperNavBarProduct>
                    <NavBarComponent/>
                </WrapperNavBarProduct>
                <Col  span={20}>
                    <WrapperProduct >
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                    </WrapperProduct>
                    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} style={{textAlign: 'center', marginTop: '10px'}} />
                </Col>
            </Row>
            
        </div>
        
    )
}

export default TypeProductPage