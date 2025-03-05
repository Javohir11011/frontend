import { useNavigate } from "react-router-dom";
import personLogo from "../../../assets/home/person-logo.svg";
import calendar from "../../../assets/home/calendar.svg";

export const Home = () => {
  const navigate = useNavigate();
  const sumbit = () => {
    navigate("/debtor");
  };
  return (
    <div>
      <div className="home">
        <div className="home__block">
          <img
            src={personLogo}
            alt="img"
            style={{ width: "60px", height: "60px" }}
          />
          <p> Test uchun</p>
        </div>
        <div>
          <img
            src={calendar}
            alt="calendar"
            onClick={sumbit}
            style={{ width: "30px", height: "30px" }}
          />
        </div>
      </div>
      <div className="">
        <button>
          
        </button>
      </div>
    </div>
  );
};
