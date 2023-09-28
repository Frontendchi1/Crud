import { createSlice } from "@reduxjs/toolkit";
import  userList  from "../Data";


function getStateFromLS() {
   return JSON.parse(localStorage.getItem("users")) || userList
}
const handleDeleteClick = () => {
   console.log("Delete button clicked"); 
   dispatch(deleteUser({ id }));
};
const usersSlice = createSlice({
   name: "users",
   initialState: getStateFromLS(),
   reducers: {
      createUser: (state, action) => {
         state.push(action.payload)
         localStorage.setItem("users", JSON.stringify(state))
      },
      updateUser: (state, action) => {
         const { id, name, email } = action.payload
         const uu = state.find(item => item.id == id)
         if (uu) {
            uu.name = name
            uu.email = email
         }
         localStorage.setItem("users", JSON.stringify(state))
      },
      deleteUser: (state, action) => {
         const { id } = action.payload;
         const index = state.findIndex(item => item.id === id);
         if (index !== -1) {
            state.splice(index, 1);
         }
         localStorage.setItem("users", JSON.stringify(state));
      }
      
   }
})

export default usersSlice.reducer
export const { createUser, updateUser, deleteUser } = usersSlice.actions