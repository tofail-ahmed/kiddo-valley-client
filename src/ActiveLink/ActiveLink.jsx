
import { NavLink } from 'react-router-dom';



const ActiveLink = ({ to, children }) => {
      return (
            <NavLink
                  to={to}
                  className={({ isActive }) =>
                        isActive
                              ? "btn btn-success mx-2"


                              : "btn btn-info mx-2"
                  }
            >
                  {children}
            </NavLink>

      );
};

export default ActiveLink;