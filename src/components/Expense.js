import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const Expense = () => {

    const Swal = require('sweetalert2')

    const [expenses, setExpenses] = useState([])

    const URL = 'http://localhost:3000'

    const getExpenses = () => {
        axios({
            method: 'get',
            url: `${URL}/expenses`
        })
        .then(expenses => {
            setExpenses(expenses.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const deleteHandler = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios({
                    method: 'delete',
                    url: `${URL}/expenses/${id}`
                })
                .then((result) => {
                    console.log("Delete Success", result);
                    getExpenses();
                })
                .catch(err => {
                    console.log(err)
                })

              Swal.fire(
                'Deleted!',
                'The data has been deleted.',
                'success'
              )
            }
          })



    }


    useEffect(() => {
        getExpenses()
    }, [])


  return (
    <>
        <div className='mx-auto'>
            <p className='font-bold text-2xl mb-5 text-center'>Expense List</p>
            {expenses.map(expense => {
                    return (

                        <div className='flex gap-5 mb-5'>
                            <div>
                                <p className='text-lg font-bold'>{expense.name}</p>
                                <div className='flex'>
                                    <p className='font-bold text-lg'>Total : &nbsp; </p>
                                    <p className='text-lg'> Rp {expense.total}</p>
                                </div>
                            </div>
                            <div>
                                <button onClick={()=> deleteHandler(+expense.id)} className='btn bg-grey rounded'>Delete</button>
                            </div>
                        </div>
                    )
                    })
            }
        </div>
    </>
  )
}

export default Expense