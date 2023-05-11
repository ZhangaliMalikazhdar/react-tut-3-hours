import {Link} from "react-router-dom" 

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link to='/about'>about</Link>
                <Link to='/posts'>post</Link>
            </div>
      </div>
    );
};

export default Navbar;
