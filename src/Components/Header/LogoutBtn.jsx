import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../AppWrite/Auth'
import { logout } from '../../Store/AuthSlice'



const LogoutBtn = () => {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }


  return (
    <button className="bg-[#0D47A1] text-white px-4 py-2 rounded-md hover:bg-[#1565C0] transition-colors duration-200"
    onClick={logoutHandler}>
      Logout
    </button>
  )
}

export default LogoutBtn