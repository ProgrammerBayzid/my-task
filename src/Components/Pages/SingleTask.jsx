import React from 'react'

const SingleTask = ({pro,  handelMakeComplete}) => {
    const {task, image, _id, complete}= pro;
  return (
    
    <div className='mb-10'>
                               {
                                complete === false? 
                                <div href="#" class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl">
                                <img class="object-cover w-full rounded-t-lg lg:h-48 sm:h-20 md:h-48 lg:w-48 md:w-48 sm:w-20 md:rounded-none md:rounded-l-lg" src={image} alt="" />
                                <div class="flex flex-col justify-between p-4 leading-normal">
                                    <h5 class="mb-2 text-2xl font-bold text-black">Task: {task}</h5>
                                    <div className=''>
                                    {complete !== true ?
                                <button onClick={() => handelMakeComplete(_id)} className='btn btn-xs bg-indigo-500 text-white '>Make Complete</button>
                                :
                                <h1>Completed</h1>
                            }
                                    {/* <label
                                onClick={() => setComand(pro)}
                                htmlFor="completed-modal"
                                className="btn bg-indigo-500 text-white"
                            >Completed
                            </label> */}
                                    </div>
                                </div>
                            </div>
                            :
                            
                        <h1></h1>
                               }

                            </div>
  )
}

export default SingleTask
