import React from 'react'
import ReactDOM from 'react-dom'
import Familia from './familia'
import Member from './member'



ReactDOM.render(
    <Familia >
        <Member name = 'Daniel' lastName='Vicente'/>
    </Familia>


    , document.getElementById('app'))
