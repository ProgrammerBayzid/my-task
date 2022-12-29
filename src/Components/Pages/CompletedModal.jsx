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
    <div>
    {/* Put this part before </body> tag */}
    <input type="checkbox" id="completed-modal" className="modal-toggle" />
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
    </div>
</div>
  )
 
}
  

export default CompletedModal
