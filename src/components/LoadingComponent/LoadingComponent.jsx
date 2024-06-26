import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import React from 'react'

const LoadingComponent = ({children, isPending, delay = 200, }) => {
    return (
        <Spin spinning={isPending} delay={delay} 
            indicator={
                <LoadingOutlined
                style={{
                    fontSize: 24,
                
                }}
                spin/>
            }
        >
         {children}
        </Spin>
    )
}

export default LoadingComponent