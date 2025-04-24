import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {selectUser} from "../../store/userSlice.js";

const AuthMiddleware = ({ children }) => {

    const userData = useSelector(selectUser)
    
    if (!userData) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default AuthMiddleware;
