// import { NavLink } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
      <div className="brand-logo">Recipe Box</div>
      <SignedInLinks />
      {/* <SignedOutLinks /> */}
      </div>
    </nav>
  );
}

export default Navbar;