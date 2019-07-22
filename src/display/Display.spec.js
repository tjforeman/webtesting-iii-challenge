// Test away!
import React from 'react'
import {render} from 'react-testing-library'
import 'react-testing-library/cleanup-after-each';
import Display from './Display'

describe('<Display />',() =>{
    it('runs without crashing',() =>{
        render(<Display />)
    })
    
    it('should display open and unlocked if opened and unlocked which is default',() =>{
        const {getByText} = render(<Display unlocked={true} open={true} />)
        getByText('Unlocked')
        getByText('Open')
    })

    it('should display closed if the closed prop is true', () =>{
        const {getByText} = render(<Display closed={true} />)
        getByText('Closed')
    })

    it('should display Locked if the locked prop is true',() =>{
        const {getByText} = render(<Display locked={true} />)
        getByText('Locked')
    })

    it('should display green if unlocked and open',()=> {
        const {getByText} = render(<Display unlocked={true} open={true} />)
        const unlocked = getByText('Unlocked')
        const open = getByText('Open')

        expect(unlocked.outerHTML).toBe("<div class=\"led green-led\">Unlocked</div>")
        expect(open.outerHTML).toBe("<div class=\"led green-led\">Open</div>")
    })

    it('should display red if locked and closed', () =>{
        const {getByText} = render(<Display locked={true} closed={true} />)
        const locked = getByText('Locked')
        const closed = getByText('Closed')

        expect(locked.outerHTML).toBe("<div class=\"led red-led\">Locked</div>")
        expect(closed.outerHTML).toBe("<div class=\"led red-led\">Closed</div>")
    })

    it('should display green for unlocked and red for closed',()=> {
        const {getByText} = render(<Display unlocked={true} closed={true} />)
        const unlocked = getByText('Unlocked')
        const closed = getByText('Closed')

        expect(unlocked.outerHTML).toBe("<div class=\"led green-led\">Unlocked</div>")
        expect(closed.outerHTML).toBe("<div class=\"led red-led\">Closed</div>")
    })
})