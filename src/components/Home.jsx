import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Fragment } from "react"
import User from "../components/User"

function Home() {
   const users = useSelector((state) => state.users)


   return (
      <div className="align-elements">
         <div className="py-14">
            <Link to="/create" className="btn btn-primary mb-5 btn-md md:btn-lg">Create user</Link>
            <div className="overflow-x-auto">
               <table className="table">
                  <thead>
                     <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                     </tr>
                  </thead>
                  {users.map(user => {
                     return (
                        <Fragment key={user.id}>
                           <User user={user} />
                        </Fragment>
                     )
                  })}
               </table>
            </div>
         </div>
      </div>
   )
}

export default Home