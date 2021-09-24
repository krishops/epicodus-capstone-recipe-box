const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Recipe Box</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/search">Search</a>
        <a href="/mybox">My Box</a>
      </div>
    </nav>
  );
}

export default Navbar;