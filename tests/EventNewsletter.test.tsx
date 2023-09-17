

import {render, screen} from '@testing-library/react'
import {EventNewsletter} from '../components/events/event-newsletter';
import { Input } from '../components/UI/input';



test('enter email into newsletter', ()=>{
    render(<Input placeholder={'newsletter'} type={''} name={''} setState={undefined} />)
    const inputEmail = screen.getByPlaceholderText('newsletter')
    
    expect(inputEmail).not.toHaveLength(0)
    expect(inputEmail).toContain('@')

})