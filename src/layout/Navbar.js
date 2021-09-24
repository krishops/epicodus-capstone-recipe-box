const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Recipe Box</h1>
      <div className="links">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/search'>Search</Link></li>
      <li><Link to='/profile' className='btn btn-floating pink lighten-1'>KH</NavLink></li>
      <li><Link to='/signout'>Log Out</Link></li>
      </div>
    </nav>
  );
}

export default Navbar;