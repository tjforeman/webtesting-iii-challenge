// Test away!
import React from 'react'
import {render,fireEvent} from 'react-testing-library'
import Controls from './Controls'

describe('<Controls />',() =>{
    it('runs without crashing',() =>{
        render(<Controls />)
    })
    it('should show the default buttons as Lock gate and Close Gate',() =>{
        const {getByText} = render(<Controls unlocked={true} open={true} />);
        
        getByText('Lock Gate')
        getByText('Close Gate')
    })
    
    it('should toggle close gate to open gate when clicked on',() =>{
        const {getByText} = render(<Controls unlocked={true} closed={true} />);
        const close = getByText('Close Gate');

        fireEvent.click(close);
        
        const open = getByText('Open Gate');
        expect(open.innerHTML).toBe('Open Gate');
    });

    it('should toggle lock gate to unlock gate when clicked on', () =>{
        const {getByText} = render(<Controls locked={true} closed={true} />);
        const lock = getByText('Lock Gate')

        fireEvent.click(lock)
        
        const unlock =getByText('Unlock Gate')
        expect(unlock.innerHTML).toBe('Unlock Gate')
    })
})
