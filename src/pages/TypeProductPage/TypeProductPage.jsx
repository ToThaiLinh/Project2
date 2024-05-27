import React from 'react'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import { Col, Pagination, Row } from 'antd'
import CardComponent from '../../components/CartComponent/CartComponent'
import { WrapperNavBarProduct, WrapperProduct } from './style'

const TypeProductPage = () => {
    const onChange = () => {}
    return (
        <div style={{padding: '0 120px', background: '#efefef'}}>
            <div style={{width: '1270px', margin: '0 auto'}}>
            <Row style={{ flexWrap: 'nowrap', paddingTop: '10px'}}>
                <WrapperNavBarProduct span={4}>
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
                    <Pagination showQuickJumper defaultCurrent={2} total={100} onChange={onChange} style={{textAlign: 'center', marginTop: '10px'}} />
                </Col>
            </Row>
            
        </div>
    </div>
        
    )
}

export default TypeProductPage