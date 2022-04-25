import {Tempcontext} from './LogContext'

import { useContext } from "react";

import { createContext } from "react";
import { Navigate } from 'react-router-dom';


export function PrivateD({ children }) { 
    const { isAuth, toggleAuth } = useContext(Tempcontext)   
    if (!isAuth) {
        return <Navigate to="/login" replace={false}/>
    }
    return children
}


