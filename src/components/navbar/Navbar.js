import "./navbar.css";

function Navbar() {
  return (
    <nav>
       <div className="navMain">
          <h2>GGAD</h2>
            <ul className="navItem">
                <li><a href="/">About Us</a></li>
                <li> <a href="/">More information</a></li>
                <li> <a href="/">Founders</a></li>
                <li> <a href="/">Donate</a></li>
            </ul> 

        {/* list for the navbar menu button */}
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
    </div>
    </nav>
  );
}

export default Navbar;