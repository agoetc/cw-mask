import * as React from 'react'

const UnMaskButton = (props: { onClick: () => void }) => {
    return <button onClick={props.onClick}>マスク解除</button>
}

export default UnMaskButton
