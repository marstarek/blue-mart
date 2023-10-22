import { Link, Navigate, useOutlet } from "react-router-dom";

export const ProtectedLayout = ({children}) => {
    const outlet = useOutlet();

    if (false) {
        return <Navigate to="/home" />;
    }

    return (
        <div>
            {children}
            {outlet}
        </div>
    );
};