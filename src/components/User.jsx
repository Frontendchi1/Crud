import { Link } from "react-router-dom"
import  deleteUser  from "../components/UsersSlice"
import { useDispatch } from "react-redux"

function User({ user }) {
   const { name, email, id } = user
   const dispatch = useDispatch()
   return (
      <>
         <tbody>
            <tr>
               <th>
                  <div className="avatar placeholder">
                     <div className="bg-neutral-focus text-neutral-content rounded-full w-10 md:w-16">
                        <span className="text-xl md:text-3xl capitalize">{name.charAt()}</span>
                     </div>
                  </div>
               </th>
               <td>
                  <div className="font-bold md:text-lg capitalize">{name}</div>
               </td>
               <td>
                  <div className="font-bold md:text-lg">{email}</div>
               </td>
               <th>
                  <div className="flex justify-center items-center gap-x-3">
                     <Link to={`/update/${id}`} className="btn md:btn-sm btn-xs btn-info">Edit</Link>
                     <button className="btn btn-error btn-xs md:btn-sm"
                    onClick={() => {
                   console.log("Deleting user with id:", id);
                    dispatch(deleteUser({ id }));
                    }}> Delete</button>
                  </div>
               </th>
            </tr>
         </tbody>
      </>
   )
}

export default User