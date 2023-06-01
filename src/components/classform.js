import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      gender: '',
      country: '',
      age: 0
    };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleGenderChange = (e) => {
    this.setState({ gender: e.target.value });
  };

  handleCountryChange = (e) => {
    this.setState({ country: e.target.value });
  };

  handleAgeChange = (e) => {
    this.setState({ age: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Name:', this.state.name);
    console.log('Email:', this.state.email);
    console.log('Gender:', this.state.gender);
    console.log('Country:', this.state.country);
    console.log('Age:', this.state.age);
    // Reset form fields
    this.setState({
      name: '',
      email: '',
      gender: '',
      country: '',
      age: 0
    });
  };

  render() {
    const { name, email, gender, country, age } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={this.handleNameChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={this.handleEmailChange} />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <label>
            <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={this.handleGenderChange} />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={this.handleGenderChange} />
            Female
          </label>
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <select id="country" value={country} onChange={this.handleCountryChange}>
            <option value="">Select a country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
            <option value="au">Australia</option>
          </select>
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" value={age} onChange={this.handleAgeChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default C;
