import "../../css/login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
function Login() {
  const navigate = useNavigate();
  let keyPress = (e) => {
    if (e.keyCode == 13) {
      onLogin();
    }
  };

  let onLogin = () => {
    let email = document.getElementById("email").value;
    let passwd = document.getElementById("passwd").value;
    let user_data = localStorage.getItem("user_data");
    let data = JSON.parse(user_data);
    let temp = 0;
    data.map((i) => {
      if (i.email === email && passwd === i.passwd) {
        localStorage.setItem("current_user", JSON.stringify(i));
        toast.success("Succesfully done...");
        navigate("/userdashboard");
      } else {
        if (i.email == "" && i.passwd == "") {
          temp = 1;
        } else {
          temp = 2;
        }
      }
    });
    if (temp == 2) {
      toast.error("Incorrect email or passwd ...");
    } else {
      toast.error("Empty email ...");
    }
  };
  return (
    <div>
      <div className="container con">
        <h4>Login</h4>
        <input
          id="email"
          type="email"
          className="form-control inp"
          placeholder="Your email"
          autoFocus={true}
          onKeyDown={keyPress}
        />
        <input
          id="passwd"
          type="password"
          className="form-control inp"
          placeholder="password"
          onKeyDown={keyPress}
        />
        <ToastContainer />
        {/* <span id="msg"></span> */}
        <div className="row r">
          <div className="col-6 r1">
            <button className="btn btn-primary inp" onClick={onLogin}>
              Submit
            </button>
          </div>
          <div className="col-6 r1">
            <Link to="/register" style={{ color: "blue" }}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
