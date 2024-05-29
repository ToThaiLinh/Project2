import { message } from "antd"

export const success = (mes = 'Success') => {
    message.success(mes)
}

export const err = (mes = 'Error') => {
    message.err(mes)
}

export const warn = (mes = 'Warning') => {
    message.warn(mes)
}