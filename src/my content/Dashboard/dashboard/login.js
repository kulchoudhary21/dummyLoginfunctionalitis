import "../../css/login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useRef } from "react";
function Login() {
  const navigate = useNavigate();
  let key=useRef("");
  let key1=useRef("");
  // let keyPress = (e) => {
  //   console.log()
  // }
  if(key1.current.keyPress==13)
  { 
    console.log("jkj")
    onLogin()
  }

  let onLogin = () => {
    console.log(key1.current.keyPress==13)
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
          ref={key}
          type="email"
          className="form-control inp"
          placeholder="Your email"
          autoFocus={true}
          // onKeyDown={keyPress}
        />
        <input
          id="passwd"
          type="password"
          className="form-control inp"
          placeholder="password"
          // onKeyDown={keyPress}
          
        />
        <ToastContainer />
        {/* <span id="msg"></span> */}
        <div className="row r">
          <div className="col-6 r1">
            <button className="btn btn-primary inp" onClick={onLogin} ref={key1} value={true}>
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
