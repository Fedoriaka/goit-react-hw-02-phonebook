import React, { Component } from 'react';
import styles from './form.module.css'
export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameInput = ev => {
    this.setState({ name: ev.target.value });
  };
  handleNumberInput = ev => {
    this.setState({ number: ev.target.value });
  };
  onAddContact = () => {
      const { name, number } = this.state;
      this.props.onAddContact(name, number);

      this.setState({
        name: '',
        number: '',
      });
  };
  render() {
    return (
      <form className={styles.form}
        onSubmit={e => {
          e.preventDefault();
          this.onAddContact();
        }}
        >
            <label>Name</label>
            <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleNameInput}
          required
            />
            <label>Number</label>
        <input
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleNumberInput}
          required
        />
        <button type="submit">Add</button>
      </form>
    );
  }
};
