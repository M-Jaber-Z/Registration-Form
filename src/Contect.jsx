import React, { useState } from 'react'
import Form from './Form'
import Table from './Table'
function Contect() {
  const initiload = [
        {
            name: 'Ahmad',
            fathername: 'Karim',
            lastname: 'Azizi',
            age: 43
        },
        {
            name: 'Akbar',
            fathername: 'Jalil',
            lastname: 'Rahimi',
            age: 54
        },
        {
            name: 'Akbar',
            fathername: 'Jalil',
            lastname: 'Rahimi',
            age: 54
        },
    ]

    const [students, setStudents] = useState(initiload)
  return (
    <div className='h-screen bg-slate-700 p-10 flex flex-col gap-10'>
      <Form setStudents={setStudents}/>
      <Table students={students} setStudents={setStudents}/>  
    </div>
  )
}

export default Contect