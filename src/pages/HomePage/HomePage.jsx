import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct, WrapperButtonMore, WrapperProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.png'
import slider2 from '../../assets/images/slider2.jpg'
import slider3 from '../../assets/images/slider3.jpg'
import CartComponent from '../../components/CartComponent/CartComponent'

const HomePage = () => {
    const arr = ['Bánh ngọt', 'Đồ ăn nhanh', 'Đồ đông lạnh']
    return (
        <>
            <div style={{padding: "0 120px"}}>
                <WrapperTypeProduct>
                    {arr.map( item => {
                        return (
                            <TypeProduct name={item} key={item}/>
                        )
                    })}
                </WrapperTypeProduct>
            </div>

            <div id="container" style={{backgroundColor: '#efefef', padding: "0 120px", height: '1000px' , width: '100%'}}>
                <SliderComponent arrImage={[slider1, slider2, slider3]}/>

                <WrapperProduct>
                    <CartComponent/>
                    <CartComponent/>
                    <CartComponent/>
                    <CartComponent/>
                    <CartComponent/>
                    <CartComponent/>
                    <CartComponent/>
                    <CartComponent/>
                    <CartComponent/>
                    <CartComponent/>
                </WrapperProduct> 
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                <WrapperButtonMore textButton="Xem thêm"  type='ouline' styleButton={{
                    border: '1px solid #FFCC00', color: '#FFCC00', width: '240px', height:'38px', borderRadius: '4px' }}
                    styleTextButton={{fontWeight: 500}}
                />
                </div>
                
            </div>  
        </>
    )
}

export default HomePage