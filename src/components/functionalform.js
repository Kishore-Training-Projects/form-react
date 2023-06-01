import React, { useState } from 'react';

const FunctionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [age, setAge] = useState(0);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Gender:', gender);
    console.log('Country:', country);
    console.log('Age:', age);
    // Reset form fields
    setName('');
    setEmail('');
    setGender('');
    setCountry('');
    setAge(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <label>
          <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
          Female
        </label>
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <select id="country" value={country} onChange={handleCountryChange}>
          <option value="">Select a country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
          <option value="au">Australia</option>
        </select>
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" value={age} onChange={handleAgeChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FunctionForm;
