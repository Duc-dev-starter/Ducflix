import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from './AuthContext.jsx'
export default function Protected({children}) {
    const {user} = UserAuth();
    if(!user){
      return <Navigate to='/'/>
    }
  return children;
}