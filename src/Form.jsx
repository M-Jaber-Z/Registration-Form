import React, { useState } from 'react'

function Form({ setStudents }) {

    const empyobj = {
        name: '',
        age: '',
        fathername: '',
        lastname: ''
    }
    const [form, setForm] = useState(empyobj)

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const handleSubmit = () => {
        setStudents((prevState) => {
            return [...prevState, form]
        })
    }

    const handleReset = () => {
        setForm(empyobj)
    }
    return (
        <div className='h-3/10 bg-rose-300 rounded-2xl shadow-2xl shadow-black p-10 grid grid-cols-4 gap-4'>
            <div className='h-10 bg-rose-500 rounded-xl flex items-center px-2 gap-2'>
                <label className='w-1/5 text-rose-950'>Name</label>
                <input type="text" className='w-4/5 outline-none text-white' placeholder='Enter your name...' name='name' onChange={handleChange} value={form.name} />
            </div>
            <div className='h-10 bg-rose-500 rounded-xl flex items-center px-2 gap-2'>
                <label className='w-1/5 text-rose-950'>Age</label>
                <input type="text" className='w-4/5 outline-none text-white' placeholder='Enter your Age...' name='age' onChange={handleChange} value={form.age} />
            </div>
            <div className='h-10 bg-rose-500 rounded-xl flex items-center px-2 gap-2'>
                <label className='w-1/5 text-rose-950'>F.Name</label>
                <input type="text" className='w-4/5 outline-none text-white' placeholder='Enter your F/Name...' name='fathername' onChange={handleChange} value={form.fathername} />
            </div>
            <div className='h-10 bg-rose-500 rounded-xl flex items-center px-2 gap-2'>
                <label className='w-1/5 text-rose-950'>Last</label>
                <input type="text" className='w-4/5 outline-none text-white' placeholder='Enter your Lastname...' name='lastname' onChange={handleChange} value={form.lastname} />
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div className='flex gap-2 h-full w-full'>
                <button className='w-full h-full bg-gray-500 rounded-2xl text-white hover:bg-gray-400 cursor-pointer' onClick={handleSubmit}>Submit</button>
                <button className='bg-rose-600 rounded-2xl text-white w-full h-full hover:bg-rose-500 cursor-pointer' onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default Form