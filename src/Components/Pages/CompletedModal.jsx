import React from 'react'
import { toast } from 'react-toastify';

const CompletedModal = ({comand, setComand}) => {

  const { task, _id}= comand;



  const handelEdit = (event, id) => {
    event.preventDefault();
    const form = event.target;
    const task = form.name.value;
    

    const edit = {
        task: task,
       
    };
    fetch(`https://photograghy-server.vercel.app/patch/reviews/${id}`, {
        method: 'PATCH',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(edit)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success('Review Update Successfully')
        })



}
        




  return (

    
    
    <div id="completed-modal" data-modal-backdrop="completed-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
        <div class="relative w-full h-full max-w-2xl md:h-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="p-6 space-y-6">
                    <form onSubmit={() => handelEdit(_id)}>
                        <div>
                            <div className=' mt-5 '>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered input-sm w-full " defaultValue={task} />
                                <button className="btn btn-xs bg-indigo-500 mt-5" type='submit'> Confirm Edit </button>
                            </div>
                            <div className='text-center mt-5'>

                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
    
   
  )
 
}
  

export default CompletedModal






{/* <input type="checkbox" id="completed-modal" className="modal-toggle" />
<div className="modal">
    <div className="modal-box relative">
        <label htmlFor="completed-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
       
        <form onSubmit={() => handelEdit(_id)}>
                        <div>
                            <div className=' mt-5 '>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered input-sm w-full " defaultValue={task} />
                                <button className="btn btn-xs bg-indigo-500 mt-5" type='submit'> Confirm Edit </button>
                            </div>
                            <div className='text-center mt-5'>

                            </div>
                        </div>
                    </form>
    </div>
</div> */}
