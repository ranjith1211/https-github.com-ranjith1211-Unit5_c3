import { useContext } from "react";
import {Tempcontext} from './LogContext'
export const Logout = () => {

  // log user out. it's just an inmemory value in context api
  const { isAuth, toggleAuth } = useContext(Tempcontext)
  return <div>
    <button onClick={() => {
      toggleAuth()
    }}>Logout</button>
  </div>;
};
