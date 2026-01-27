import React, { useState } from 'react'

const Form = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        age:"",
        department:""
    });
    const handleChange = (e) => {
        const {name,value} = e.target;
        setForm((prev)=>({
            ...prev,/*-->spread operator*/
            [name]:value
        })
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(form);
    }
  return (
    <div>
        <h2>Form</h2>
        <form onSubmit ={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input type="text" id="name" name="name" value={form.name} onChange={handleChange}/><br/><br/>
        <label htmlFor='email'>Email:</label>
        <input type="email" id="email" name="email" value={form.email} onChange={handleChange}/><br/><br/>
        <label htmlFor='age'>Age:</label>
        <input type="number" id="age" name="age" value={form.age} onChange={handleChange}/><br/><br/>
        <label htmlFor='department'>Department:</label>
        <input type="text" id="department" name="department" value={form.department} onChange={handleChange}/><br/><br/>
        <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Form
