// Test away!
import React from 'react'
import {render} from 'react-testing-library'
import Display from './Display'

describe('<Display />',() =>{
    it('runs without crashing',() =>{
        render(<Display />)
    })
})