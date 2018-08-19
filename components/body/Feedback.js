
import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';

 export default class Feedback extends React.Component {
  render() {
    let style = {backgroundColor: 'green'};
    return (
      <Form>
        {/* <legend className="legend">Напишіть нам і ми перетелефонуємо:</legend> */}
        <p className="legend">Напишіть нам і ми перетелефонуємо:</p>

        <Input placeholder="Ім'я" />
        <Input placeholder="Телефон" />
        <Textarea placeholder="Яку роботу бажаєте?" />
        <Button variant="raised" style={style}>Надіслати</Button>
      </Form>
    );
  }
}