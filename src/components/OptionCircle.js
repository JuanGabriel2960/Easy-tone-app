import React from 'react'

const OptionCircle = ({imgCircle,color}) => {
    return (
        <div className={`optionCircle ${color}`}>
            <img alt='' src={imgCircle}/>
        </div>
    )
}

export default OptionCircle
