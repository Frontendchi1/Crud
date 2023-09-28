import { useState } from "react"
import  createUser  from "../components/UsersSlice"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, Link } from "react-router-dom"


function Create() {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const users = useSelector(state => state.users)

   function handleSubmit(e) {
      e.preventDefault()
      dispatch(createUser({
         id: users.length ? users[users.length - 1].id + 1 : 1,
         name,
         email
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
                     onChange={(e) => setName(e.target.value)}
                     required
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
                     onChange={(e) => setEmail(e.target.value)}
                     required
                  />
                  <button className='btn btn-primary my-5'>create</button>
                  <Link to="/" className="btn btn-ghost">back to home</Link>
               </form>
            </div>
         </div>
      </div>

   )
}

export default Create