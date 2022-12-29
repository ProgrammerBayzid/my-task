import React from 'react'
import { toast } from 'react-toastify';

const SingleCompleteTask = ({sComplete,handelMakeNotComplete,setComand, handleDelete}) => {
    const {task, image, _id, complete}= sComplete;
    

  return (
    <div className='mb-10 ml-10'>
    {
        complete === true? 
        <div href="#" class="flex flex-col items-center  border rounded-lg shadow-md md:flex-row md:max-w-xl">
        <img class="object-cover w-full rounded-t-lg lg:h-48 sm:h-20 md:h-48 lg:w-48 md:w-48 sm:w-20 md:rounded-none md:rounded-l-lg" src={image} alt="" />
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold switeh">Task: {task}</h5>
            <div className=''>
            {complete === true ?
        <button onClick={() => handelMakeNotComplete(_id)} className='btn btn-xs bg-indigo-500 switeh p-2'>Make Not Complete</button>
        :
        <h1>Completed</h1>
    }
    <button onClick={() => handleDelete(_id)} className='btn btn-xs bg-indigo-500 switeh ml-5 p-2'>Delete</button>
            {/* <label
        onClick={() => setComand(sComplete)}
        htmlFor="completed-modal"
        className="btn btn-xs bg-indigo-500 switeh ml-5"
    >Edit
    </label> */}
    {/* <button 
     onClick={() => setComand(sComplete)}
    class="block switeh bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  data-modal-toggle="completed-modal">
  Edit
</button> */}
            </div>
        </div>
    </div>
    :
    <></>
        
    }

</div>
  )
}

export default SingleCompleteTask
