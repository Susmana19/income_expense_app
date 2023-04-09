import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const Income = () => {

    const Swal = require('sweetalert2')

    const [incomes, setIncomes] = useState([])

    const URL = 'http://localhost:3000'

    const getIncomes = () => {
        axios({
            method: 'get',
            url: `${URL}/incomes`
        })
        .then(incomes => {
            setIncomes(incomes.data)
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
                    url: `${URL}/incomes/${id}`
                })
                .then((result) => {
                    
                    console.log("Delete Success", result);
                    getIncomes();
                })
                .catch(err => {
                    console.log(err)
                })
              Swal.fire(
                'Deleted!',
                'the data has been deleted.',
                'success'
              )
            }
          })


    }

    useEffect(() => {
        getIncomes()
    }, [])

  return (
    <>
        <div className='mx-auto'>
            <p className='font-bold text-2xl mb-5 text-center'>Income List</p>

            {incomes.map(income => {
                    return (

                        <div className='flex gap-5 mb-5'>
                            <div>
                                <p className='text-lg font-bold'>{income.name}</p>
                                <div className='flex'>
                                    <p className='font-bold text-lg'>Total : &nbsp; </p>
                                    <p className='text-lg'> Rp {income.total}</p>
                                </div>
                            </div>
                            <div>
                                <button onClick={()=> deleteHandler(+income.id)} className='btn bg-grey rounded'>Delete</button>
                            </div>
                        </div>
                    )
                    })
            }
        </div>
    </>
  )
}

export default Income