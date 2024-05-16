import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function useAuth(){
    return useContext(AuthContext);
}
export default useAuth;