import { GiCheckMark } from "react-icons/gi";
import "./Hero.css";
import { TbActivityHeartbeat } from "react-icons/tb";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsStarFill } from "react-icons/bs";
import { IoStarSharp } from "react-icons/io5";

export default function Hero() {
  return (
    <section className="Ia-Hero">
      <div className="Ia-Hero-BG">
        <div className="Hero-BG-shapes">
          <img src="/public/img/heroShape1_2.webp" />
          <img src="/img/heroShape1_1.webp" />
        </div>
        <div className="Ia-Hero-content">
          <div className="side-2">
            <img src="/public/img/heroThumb1_1.webp" />
          </div>
          <div className="side-1">
            <div className="Slogan">
              <TbActivityHeartbeat />
              <p>Everything You Need To Create A Website</p>
            </div>
            <h2>Bussiness Innovation With IT Services Experties</h2>
            <ul>
              <li>
                <GiCheckMark />
                Development and Support
              </li>
              <li>
                <GiCheckMark />
                Discovery and Analysis
              </li>
              <li>
                <GiCheckMark />
                flexibility and adaptability
              </li>
              <li>
                <GiCheckMark />
                Competitive Advantage
              </li>
            </ul>
            <button>
              GET STARTED
              <IoIosArrowRoundForward />
            </button>
            <div className="bottom-div">
              <div className="leftSide-bottom-div">
                <h5>
                  <IoStarSharp />
                  Trustipilot
                </h5>
                <div className="bottom-row">
                  <img src="/public/img/profileShape1_1.webp" />
                  <div className="bottom-row-right-section">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <p>450+ reviews</p>
                  </div>
                </div>
              </div>
              <div className="rightSide-bottom-div">
                <h5>Google</h5>
                <div className="bottom-row">
                  <img src="/public/img/profileShape1_1.webp" />
                  <div className="bottom-row-right-section">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <p>450+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
