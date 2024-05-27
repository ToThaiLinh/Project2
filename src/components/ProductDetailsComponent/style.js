import { InputNumber } from "antd";
import styled from "styled-components";

export const WrapperStyleNameProduct = styled.h1`
    font-weight: 700;
    float: left;
    padding: 5px 0 2px;
    font-size: 20px;
    line-height: 1.2em;
    text-shadow: 0 1px 1px #fff;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 510px;
`

export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120);
`

export const WrapperPriceProduct = styled.div`
    background: rgb(250, 250, 250);
    border-radius: 4px;
`

export const WrapperPriceTextProduct = styled.div`
    font-size: 32px;
    line-height: 40px;
    margin-right: 8px;
    font-weight: 500;
`

export const WrapperAddressProduct = styled.div`
    span.address {
        text-decoration: underline;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    };
    span.change-address {
        color: rgb(11, 116, 229);
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        flex-shrink: 0;
    };
`

export const WrapperQuanlityProduct = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    width: 100px;
    border: 1px solid #ccc;
    border-radius: 4px;
`


export const WrapperInputNumber = styled(InputNumber)`
    &.ant-input-number.ant-input-number-sm {
        width: 60px;
        border-top: none;
        border-bottom: none;
        &.ant-input-number.handle-wrap {
        display: none;
    }
`
    