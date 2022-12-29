import React, { useContext, useEffect, useState,  } from 'react'
import CompletedModal from './CompletedModal';
import SingleTask from './SingleTask';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Context/Context';

const MyTask = () => {
    
    const { user  } = useContext(AuthContext)

    const { data: tasks = [], refetch, isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await fetch(`https://server-task-my-task.vercel.app/services?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    });

  
    
    const handelMakeComplete = id => {
        fetch(`https://server-task-my-task.vercel.app/alltask/${id}`, {
            method: 'PUT',
            headers: {
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Complete Successful.');
                    refetch();
                }
            })
    };


    
    
    return (
        <div>
            <h1 className='px-4 text-center text-2xl sm:text-5xl md:text-3xl lg:text-5xl font-semibold my-10  '>
                <span className='text-orange-500'>My </span> Task</h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-2'>
                {
                    tasks.map(task => 
                        <SingleTask
                        key={task._id}
                        pro={task}
                        handelMakeComplete={handelMakeComplete}
                        ></SingleTask>

                )
                }

            </div>
           
        </div>
    )
}

export default MyTask
