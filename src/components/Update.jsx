import { Link, useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import  updateUser  from "../components/UsersSlice"

function Update() {
   const { id } = useParams()
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const users = useSelector(state => state.users)
   const user = users.find((item) => item.id == id)
   const { name, email } = user
   const [uname, setUname] = useState(name)
   const [uemail, setUemail] = useState(email)

   function handleSubmit(e) {
      e.preventDefault()
      dispatch(updateUser({
         id: id,
         name: uname,
         email: uemail
      }))
      navigate("/")


   }
   return (
      <div className='min-h-screen flex items-center justify-center '>
         <div className='card shadow-xl sm:w-96'>
            <div className='card-body'>
               <form className='form-control' onSubmit={handleSubmit}>
                  <label className='label'>
                     <span className='label-text capitalize'>
                        name
                     </span>
                  </label>
                  <input
                     type="text"
                     placeholder="users name"
                     className="input input-bordered w-full max-w-xs mb-2"
                     required
                     value={uname}
                     onChange={(e) => setUname(e.target.value)}
                  />
                  <label className='label'>
                     <span className='label-text capitalize'>
                        email
                     </span>
                  </label>
                  <input
                     type="email"
                     placeholder="users email"
                     className="input input-bordered w-full max-w-xs mb-2"
                     required
                     value={uemail}
                     onChange={(e) => setUemail(e.target.value)}
                  />
                  <button className='btn btn-primary my-5'>update</button>
                  <Link to="/" className="btn btn-ghost">back to home</Link>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Update