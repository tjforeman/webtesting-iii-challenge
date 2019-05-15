// Test away
import React from 'react'
import {render, getByText} from 'react-testing-library'
import 'react-testing-library/cleanup-after-each';
import Dashboard from './Dashboard'

describe('<Dashboard />',() =>{
    it('runs without crashing',() =>{
        render(<Dashboard />)
    })
    it('defaults to unlocked and open', ()=> {
        const {getByText} = render(<Dashboard />);
        getByText('Unlocked')
        getByText('Open')
    })
    it('displays the buttons from controls' ,() =>{
        const {getByText} = render(<Dashboard />);
        getByText('Lock Gate')
        getByText('Close Gate')
    })
})