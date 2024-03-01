import React from 'react'
import Tick from '../assets/Tick'
import Help from '../assets/Help'
import Down from '../assets/Down'
import Vector from '../assets/Vector'
import './hero.css'

function Hero() {
  return (
    <div className='hero'>
        <h1 className='heading'>Best Website builders in the US</h1>
        <hr className='break'/>
        <div className='update'>
            <div className='left'>
                <Tick/>
                <p className='gap'>Last Updated - February 22, 2020</p>
                <Help/>
                <p>Advertising Disclosure</p>
            </div>
            <div className='right'>
                <p>Top Relevant</p>
                <Down/>
            </div>
        </div>
        <hr className='break'/>
        <div className='tools'>
            <div className='sec1 para'>Tools</div>
            <div className='sec2 para'>AWS Builder</div>
            <div className='sec3 para'>Start Build</div>
            <div className='sec4 para'>Build Supplies</div>
            <div className='sec5 para'>Tooling</div>
            <div className='sec6 para'>BlueHosting</div>
        </div>
        <div className='root'>
            <p>Home</p>
            <Vector/>
            <p>Hosting for all</p>
            <Vector/>
            <p>Hosting</p>
            <Vector/>
            <p>Hosting6</p>
            <Vector/>
            <p>Hosting5</p>
        </div>
    </div>
  )
}

export default Hero