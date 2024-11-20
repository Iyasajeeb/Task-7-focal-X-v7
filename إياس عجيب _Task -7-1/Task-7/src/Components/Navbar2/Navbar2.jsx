import { FaAngleDown, FaArrowRightLong } from 'react-icons/fa6'
import './Navbar2.css'
import { IoIosClose } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoMenu } from 'react-icons/io5';
export default function Navbar2() {
    const [Toglle, setToglle] = useState(true);
    return (
        <>
            <nav className="Navbar2">
      <div className="rectangle">
        {" "}
        <div className="tringle "> </div>
        <button>
          GET A QUOTE
          <FaArrowRightLong className="righticon" />
        </button>
      </div>
      <img src='/public/img/plane.webp' alt="logo" className="logo2" />
      <img src='/public/img/logo.svg' alt="logo" className="logo" />
      <div className={Toglle ? "setoflinks1" : "setoflinks"}>
        <ul>
          <IoIosClose className="close " onClick={() => setToglle(true)} />

          <li>
            {" "}
            <Link to={"/"}> Home </Link>
            <FaAngleDown className="downicon" />
          </li>
          <li>
            <Link to={"/about"}>About</Link>{" "}
          </li>
          <li>
            services
            <FaAngleDown className="downicon" />
          </li>
          <li>
            Pages
            <FaAngleDown className="downicon" />
          </li>
          <li>
            Biog
            <FaAngleDown className="downicon" />
          </li>
          <li>
            {" "}
            <Link to={"/contact"}> Contact</Link>{" "}
          </li>
        </ul>
      </div>
      <div className="navRight">

        <CiSearch className="searchicon" />
        <span onClick={() => setToglle(false)}>
          <IoMenu className="menu" />
        </span>
      </div>
    </nav>
        </>
    )
}
