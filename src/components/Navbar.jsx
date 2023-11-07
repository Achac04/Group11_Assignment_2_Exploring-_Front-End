import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" href="/">
              Students
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" href="/new-student">
              Add Student
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
