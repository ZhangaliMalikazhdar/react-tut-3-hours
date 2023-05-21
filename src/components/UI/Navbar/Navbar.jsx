import { useContext } from "react";
import {Link} from "react-router-dom" 
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    return (
        <div className='navbar'>
            <MyButton onClick={() => setIsAuth(false)}>
                Exit
            </MyButton>
            <div className='navbar__links'>
                <Link to='/about'>about</Link>
                <Link to='/posts'>post</Link>
            </div>
      </div>
    );
};

export default Navbar;
