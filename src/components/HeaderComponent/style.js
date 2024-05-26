import {Row} from 'antd'
import styled from 'styled-components'

export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-color: #FFCC00;
    align-items: center;
    grap: 16px;
    flex-wrap: nowrap;
`

export const WrapperTextHeader = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    text-align: left;
`

export const WrapperHeaderAccount = styled.div`
    display:flex;
    align-items: center;
    color: #fff;
    gap: 10px;
    font-size: 12px;
`

export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: #fff;
    white-space: nowrap;

`