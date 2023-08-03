import {Button} from '../UI/button';
import {useRef} from 'react';
import style from './event-search.module.css';
export const EventSearch = (props) => {
  const yearInputRef = useRef('2021');
  const monthInputRef = useRef('1');
  const submitHandler = (event: any) => {
    event.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  };
  return (
    <form
      className={style.form}
      onSubmit={submitHandler}>
      <div className={style.controls}>
        <div className={style.control}>
          <label htmlFor='year'>Year</label>
          <select
            ref={yearInputRef}
            name='year'
            id='year'>
            <option value={'2021'}>2021</option>
            <option value={'2022'}>2022</option>
          </select>
        </div>
        <div className={style.control}>
          <label htmlFor='month'>Month</label>
          <select
            ref={monthInputRef}
            name='month'
            id='month'>
            <option value={'1'}>January</option>
            <option value={'2'}>Febuary</option>
            <option value={'3'}>March</option>
            <option value={'4'}>April</option>
            <option value={'5'}>May</option>
            <option value={'6'}>June</option>
            <option value={'7'}>July</option>
            <option value={'8'}>August</option>
            <option value={'9'}>September</option>
            <option value={'10'}>October</option>
            <option value={'11'}>November</option>
            <option value={'12'}>December</option>
          </select>
        </div>{' '}
        <Button>Find Events</Button>
      </div>
    </form>
  );
};
