import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/Context';

const AddTask = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { user  } = useContext(AuthContext)



    const handleAddTask = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = 'https://api.imgbb.com/1/upload?key=56b634afb1bea6129ca7b774d0d3db94'
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const task = {

                        task: data.task,
                        image: imgData.data.url,
                        complete: false,
                        email: user.email


                    }

                    // save product information to the database
                    fetch('https://server-task-my-task.vercel.app/addtask', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(task)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.task} is added successfully`);
                            navigate('/mytask')
                        })
                }
            })
    }


    return (
      <div>
          <div className='w-96 p-7'>
            <h2 className="text-4xl">Add A Task</h2>
            <form onSubmit={handleSubmit(handleAddTask)}>
                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Task</span></label>
                    <input
                        type="text" {...register("task", {
                            required: "Task is Required"
                        })} className="input input-bordered w-full " />
                    {errors.Task && <p className='text-red-500'>{errors.Task.message}</p>}
                </div>

                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full " />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn bg-indigo-500 text-white w-full mt-4' value="Add Task" type="submit" />
            </form>
        </div>
      </div>
    )
}

export default AddTask
