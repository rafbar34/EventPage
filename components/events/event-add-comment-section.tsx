import {Input} from '../UI/input';
import {useState} from 'react'
import { TextArea } from '../UI/textArea';
import style from './event-add-comment-section.module.css';
import { useRouter } from 'next/router';
export const EventAddCommentSection = () => {
  const router = useRouter()
  const eventId = router.query.eventId
  const inputCustom = {width: '45%'};
  const [email,setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [context,setContext] = useState('')

  const submitCommentsHandler = async(e:any) =>{
    e.preventDefault()

    const response = await fetch(`/api/comments/${eventId}`,{
      method: 'POST',
      body: JSON.stringify({
        email:email,
        userName:userName,
        content:context,
        commentId:(Math.random()*100000).toFixed(),
        eventId:eventId
      }),
      headers:{
        "Content-Type":'application/json'
      }
    })
  }
  return (
    <div>
      <div className={style.box}>
        <form onSubmit={submitCommentsHandler} className={style.form}>
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
