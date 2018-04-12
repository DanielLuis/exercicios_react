import React from 'react'
import ReactDOM from 'react-dom'
import Familia from './familia'
import Member from './member'



ReactDOM.render(
    <Familia lastName='Pinheiro'>
        <Member name = 'Daniel' />
        <Member name = 'Barbara' />
        <Member name = 'Regina' />
    </Familia>


    , document.getElementById('app'))
