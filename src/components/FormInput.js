import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';

const FormInput = () => {
    const Swal = require('sweetalert2')

    const [name, setName] = useState('');
    const [total, setTotal] = useState(0)

    const URL = 'http://localhost:3000';

    const incomeHandler = () => {
        if (name === '') {
            alert('Please enter the name of transaction')
        } else if (total === 0) {
            alert('Please enter the total of transaction')
        } else {
            axios(`${URL}/incomes`, {
                method: 'POST',
                name: name,
                total: total,
                data: {
                    name: name,
                    total: +total
                }
            })
          .then(res => {
                console.log(res.data)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Incomes successfully entered',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
          .catch(err => {
                console.log(err)
            })
        }
    }
    const expenseHandler = () => {
        if (name === '') {
            alert('Please enter the name of transaction')
        } else if (total === 0) {
            alert('Please enter the total of transaction')
        } else {
            axios.post(`${URL}/expenses`, {
                name: name,
                total: +total
            })
         .then(res => {
                console.log(res.data)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Expenses successfully entered',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
         .catch(err => {
                console.log(err)
            })
        }
    }

  return (
    <>
        <div className="form-control w-[80vh] mx-auto">
            <div className='w-full'>
                <label className="label">
                    <span className="label-text font-bold text-xl">Transaction name</span>
                </label>
                <input
                onChange={(e) => setName(e.target.value) }
                type="text" placeholder="Type the name of transaction" className="input input-bordered w-full text-xl input-primary" />
            </div>
            <div className='w-full mb-2'>
                <label className="label">
                    <span className="label-text font-bold text-xl">Total</span>
                </label>
                <input 
                onChange={(e) =>  setTotal(e.target.value)}
                type='number' placeholder="Type the total of transaction" className="input input-bordered w-full text-xl input-primary" />
            </div>
            <div className='flex mt-3 justify-between'>
                <button onClick={()=> incomeHandler()} className="btn btn-success w-[48%] font-bold text-lg">Add Income</button>
                <button onClick={()=> expenseHandler()} className="btn btn-error w-[48%] font-bold text-lg">Add Expense</button>
            </div>
        </div>
    </>
  )
}

export default FormInput