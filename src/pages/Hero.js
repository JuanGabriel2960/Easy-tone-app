import React,{useState} from 'react'
import SvgOne from '../components/SvgOne'
import SvgTwo from '../components/SvgTwo'
import SvgThree from '../components/SvgThree'
import SvgFour from '../components/SvgFour'
import SvgFive from '../components/SvgFive'
import {Link} from 'react-router-dom'
import '../styles/Hero.css'

const Hero = () => {

    const [title, setTitle] = useState('BASIC ASPECTS')
    const [info, setInfo] = useState('With this app you will learn a lot about music theory, even if you are a beginner.')
    const [btn, setBtn] = useState('NEXT')
    const [svg, setSvg] = useState(SvgOne)

    const handleNext = (e)=>{
        const pointsDiv = document.querySelectorAll('.point')

        pointsDiv.forEach( (a)=>{
            a.classList.remove('on')
        })

        e.target.classList.add('on')

        if(e.target.classList.contains('p1')){
            setTitle('BASIC ASPECTS')
            setInfo('With this app you will learn a lot about music theory, even if you are a beginner.')
            setBtn('NEXT')
            setSvg(SvgOne)
        }
        if(e.target.classList.contains('p2')){
            setTitle('LEARN BY YOURSELF')
            setInfo('With this app you learn on your own, without the need for teachers.')
            setBtn('NEXT')
            setSvg(SvgTwo)
        }
        if(e.target.classList.contains('p3')){
            setTitle('RAPID PROGRESS')
            setInfo('With our learning method, you will notice significant progress in a matter of days.')
            setBtn('NEXT')
            setSvg(SvgThree)
        }
        if(e.target.classList.contains('p4')){
            setTitle('EASY ACCESS')
            setInfo('The app is very flexible to your schedule, you can start studying practically whenever you want.')
            setBtn('NEXT')
            setSvg(SvgFour)
        }
        if(e.target.classList.contains('p5')){
            setTitle('ENJOY')
            setInfo('Take your instrument and start learning, but do not forget the most important thing, enjoy it.')
            setBtn('START')
            setSvg(SvgFive)
        }


    }

    return (
        <div className='hero'>
            <div className='cont-hero center container'>
                
                {svg}
                
                <h3 className='heroTitle'>{title}</h3>
                <p className='about-hero'>{info}</p>
                <div className='points'>
                    <div onClick={handleNext} className='p1 point on' id='p1'>&bull;</div>
                    <div onClick={handleNext} className='p2 point' id='p1'>&bull;</div>
                    <div onClick={handleNext} className='p3 point' id='p1'>&bull;</div>
                    <div onClick={handleNext} className='p4 point' id='p1'>&bull;</div>
                    <div onClick={handleNext} className='p5 point' id='p1'>&bull;</div>
                </div>
                <div  className='btn'><p>{btn}</p></div>
                <Link to='/main'><span className='skip'>Skip introduction</span></Link>
            </div>
        </div>
        
    )

}

export default Hero
