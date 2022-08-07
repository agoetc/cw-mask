import * as React from 'react'

const MuskButton = (props: { onClick: () => void }) => {
    return <button onClick={props.onClick}>マスク</button>
}

export default MuskButton
