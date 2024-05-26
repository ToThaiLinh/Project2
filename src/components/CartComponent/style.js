import styled from 'styled-components'
import {Card} from 'antd'

export const WrapperCartStyle = styled(Card)`
    width: 200px;
    & img {
        height: 200px;
        width: 200px;
    }
    position: relative;
`

export const WrapperImageStyle = styled.img`
    position: absolute;
    top: -1px;
    left: -1px;
    border-top-left-radius: 3px;
    height: 14px;
    width: 68px;
`

export const StyleNameProduct = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgb(56, 56, 61);
`
export const WrapperReportText = styled.div`
    font-size: 11px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
    margin: 6px 0 4px;
`

export const WrapperPriceText = styled.div`
    color: rgb(255, 66, 78);
    font-size: 16px;
    font-weight: 500;
    margin: 8px 0;
`

export const WrapperPriceDiscountText = styled.span`
    color: rgb(255, 66, 78);
    font-size: 12px;
    font-weight: 500;
`
