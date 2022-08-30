import * as React from 'react'

const MaskButton = (props: { onClick: () => void }) => {
    return <button onClick={props.onClick}>マスク</button>
}

export default MaskButton
