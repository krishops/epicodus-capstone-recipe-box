import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/search'>Search</NavLink></li>
      {/* <NavLink to='/signout'>Log Out</NavLink> */}
      <li><NavLink to='/profile' className='btn btn-floating pink lighten-1'>KH</NavLink></li>
    </ul>
  );
}
 
export default SignedInLinks;