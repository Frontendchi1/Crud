import { Link } from "react-router-dom"

function Error() {
   return (
      <div className='flex flex-col items-center justify-center min-h-screen gap-y-5'>
         <h1 className='text-6xl font-bold capitalize'>Page not found!</h1>
         <p className="text-xl font-medium text-base-content">
            We are sorry, we can not find this page. You can come back to our home page!
         </p>
         <Link to="/" className='btn btn-primary'>Back to Home</Link>
      </div>
   )
}

export default Error