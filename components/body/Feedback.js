import React, { Component } from "react";

import { Form, Text, NestedField } from "react-form";

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Form
        onSubmit={submittedValues => this.setState({ submittedValues })}
        className="form"
      >
        {formApi => (
          <form onSubmit={formApi.submitForm} id="form4">
            <label htmlFor="firstName3" className="form_title">
              Заповніть форму і ми до Вас зателефонуємо
            </label>
            <label htmlFor="firstName3" className="input_label">
              Ваше ім'я
            </label>
            <Text field="firstName" className="input" />
            <label htmlFor="color" className="input_label">
              Яку роботу ви шукаєте?
            </label>
            <Text field="color" id="color" className="input" />
            <label htmlFor="food" className="input_label">
              Ваш номер телефону?
            </label>
            <Text field="food" id="food" className="input" />
            <button
              type="submit"
              className="mb-4 btn btn-primary"
              className="btn_submit blue"
            >
              Надіслати
            </button>
          </form>
        )}
      </Form>
    );
  }
}
