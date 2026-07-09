import React from 'react'

function Table({ students, setStudents }) {

    const handleDelte = (i) => {
        setStudents((prevStudents) => {
            let newStudents = prevStudents.filter((item, index) => {
                return index != i
            })
            return newStudents
        })
    }

    return (
        <div className='h-7/10 bg-rose-400 rounded-2xl shadow-2xl shadow-black p-10'>
            <table className='w-full rounded-xl shadow-2xl shadow-black'>
                <tr className='bg-red-800 h-10'>
                    <th>Name</th>
                    <th>F.Name</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>More</th>
                </tr>
                {students.map((item, i) => {
                    return (
                        <tr className='bg-red-500 h-10 rounded-xl'>
                            <td>{item.name}</td>
                            <td>{item.fathername}</td>
                            <td>{item.lastname}</td>
                            <td>{item.age}</td>
                            <td><button onClick={() => handleDelte(i)}>🗑</button></td>
                        </tr>
                    )
                })}

            </table>
        </div>
    )
}

export default Table