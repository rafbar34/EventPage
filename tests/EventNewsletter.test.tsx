import {fireEvent, render, screen} from '@testing-library/react';
import {EventNewsletter} from '../components/events/event-newsletter';
import {Input} from '../components/UI/input';
import React from 'react';

test('enter email into newsletter', () => {
  const mockSetState = jest.fn();

  render(
    <Input
      type={'text'}
      placeholder={'newsletter'}
      name={''}
      setState={mockSetState}
    />
  );
  const inputEmail = screen.getByPlaceholderText(
    'newsletter'
  ) as HTMLInputElement;
  fireEvent.change(inputEmail, {target: {value: 'kifar121@gmail.com'}});

  expect(inputEmail.value).toEqual('kifar121@gmail.com');
});
