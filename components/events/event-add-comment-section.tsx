import {Input} from '../UI/input';
import {useState} from 'react'
import { TextArea } from '../UI/textArea';
import style from './event-add-comment-section.module.css';
export const EventAddCommentSection = () => {
  const inputCustom = {width: '45%'};
  const [email,setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [context,setContext] = useState('')
  return (
    <div>
      <div className={style.box}>
        <form className={style.form}>
          <div className={style.inputs}>
            <Input
              style={inputCustom}
              type='text'
              name='email'
              placeholder='email'
              setState={setEmail}
            />
            <Input
            name='userName'
            placeholder='nickname'
              style={inputCustom}
              type='text'
              setState={setUserName}
            />
          </div>
          <div className={style.textArea}>
            <TextArea setState={setContext} name='context' key={'context'} placeholder='Enter comment ...'/>
          </div>
          <button type='submit' className={style.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};
