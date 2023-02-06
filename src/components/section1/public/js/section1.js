
import '../css/section1.css'
import equilibrium from '../img/image-equilibrium.jpg'
import lagueulela from '../img/image-avatar.png'
import React from 'react'

const Section1 = ({param1}) => {
    const h4 = document.getElementsByTagName('h4')[0]
    const span = document.querySelector('.whitos')
    const div = document.getElementById('div')
    
    function quoioubeh() {
        h4.classList.add('quoicoubeh')
        span.classList.remove('whitos')
        span.classList.add('quoicoubeh2')
        div.classList.add('fuckureact')
    }
    function kad(){
        
    }



  return (
    <div class="container">
    <div class="col deux" onClick={quoioubeh}>
        <div class='hellreact'>
        <img src={equilibrium}></img>
        <div id='div'>
            </div>   
        </div>
        


    </div>
    <div class="col un">
    <h4>Equilibrium #3429</h4>
    <p>Our Equilibrium collection promotes balance and calm.</p>
    
    <p class='flex'><span class='blue'>0.041ETH</span><span class='fufu'>_________________</span>3 days left</p>
    <p class='border'> </p>
    <div class='testi'>
        <img class='imgey' src= {lagueulela}></img>
        <p>Creation of <span class='whitos'> Jules Wyvern </span></p>
    </div>

    </div>
    </div>
  )
}

export default Section1