import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react'
import SingleCompleteTask from './SingleCompleteTask';
import { toast } from 'react-toastify';
import CompletedModal from './CompletedModal';
import { AuthContext } from '../Context/Context';

const ComplatedTask = () => {
    const { user  } = useContext(AuthContext)

    const [comand, setComand]= useState(null);

    const { data: completes = [], refetch, isLoading } = useQuery({
        queryKey: ['completes'],
        queryFn: async () => {
            const res = await fetch(`https://server-task-my-task.vercel.app/services?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    });


    const handelMakeNotComplete = id => {
        fetch(`https://server-task-my-task.vercel.app/alltasks/${id}`, {
            method: 'PUT',
            headers: {
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Not Complete Successful.');
                    refetch();
                }
            })
    };

    const handleDelete = complete => {
        fetch(`https://server-task-my-task.vercel.app/completetask/${complete}`, {
            method: 'DELETE',
            headers: {
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(' deleted successfully')
                }
            })
    };

    return (
        <div>
        <h1 className='px-4 text-center text-2xl sm:text-5xl md:text-3xl lg:text-5xl font-semibold my-10  '>
            <span className='text-orange-500'>Completed Task</span> </h1>
        <div className='grid lg:grid-cols-2 md:grid-cols-2'>
            {
                completes.map(complete => 
                   
                    <SingleCompleteTask
                    key={complete._id}
                    sComplete={complete}
                    handelMakeNotComplete={handelMakeNotComplete}
                    handleDelete={handleDelete}
                    setComand={setComand}

                    ></SingleCompleteTask>

            )
            }

        </div>
        {
                comand &&
                <CompletedModal
                setComand={setComand}
                comand={comand}
                ></CompletedModal>

            }
    </div>
    )
}

export default ComplatedTask
