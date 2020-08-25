import React from 'react'
import check1 from '../images/check.png'
import check2 from '../images/check2.png'

const CheckCard = ({title,does}) => {

    const handleCheck = (e)=>{
        if(e.target.src===check2){
            e.target.src=check1
            e.target.nextElementSibling.classList.add('sub')
            e.target.parentElement.nextElementSibling.classList.add('sub')
        }else if(e.target.src===check1){
            e.target.src=check2
            e.target.nextElementSibling.classList.remove('sub')
            e.target.parentElement.nextElementSibling.classList.remove('sub')
        }
    }

    return (
        <div>
            <div className='exercise'>
                <div className='line'>
                    <img onClick={handleCheck} alt='' src={check2}/>
                    <h4>{title}</h4>
                </div>
                <p>{does}</p>
            </div>
        </div>
    )
}

export default CheckCard
