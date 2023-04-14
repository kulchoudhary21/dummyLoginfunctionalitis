import "../../css/login.css";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function Register() {

  const navigate = useNavigate();
  let keyPress=(e)=>{
    if(e.keyCode==13)
    {
      handleClick()
    }
  }
  let handleClick = function () {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let passwd = document.getElementById("passwd").value;
    let error = document.getElementById("error");
    let msg = document.getElementById("msg");
    let lsData = localStorage.getItem("user_data");
    let data;
    let flag = 0;
    if (lsData != null) {
      data = JSON.parse(lsData);
      data.map((d) => {
        console.log("items: ", d.email);
        if (d.email === email) {
          flag = 1;
        }
      });
    }
    if (flag === 0 && email !== "") {
      if (lsData != null) {
        data.push({ name, email, contact, passwd });
      } else {
        data = [];
        data.push({ name, email, contact, passwd });
      }
      localStorage.setItem("user_data", JSON.stringify(data));
      //msg.textContent = "Registered Successfully..";
      //msg.style.color = "green";
      toast.success("Successfully register !", {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate("/login");
    } else {
      if (email === "") {
        toast.error(" empty email !", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error(" emil already exist !", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      // error.textContent = "Email Already exists";
      // error.style.color = "red";
    }
  };
  return (
    <div>
      <div className="container con">
        <h4>Register</h4>
        <input
          type="text"
          id="name"
          name="name1"
          placeholder="Name"
          className="form-control inp"
          autoFocus={true}
          onKeyDown={keyPress}
        />
        <input
          id="contact"
          type="number"
          name="contact1"
          placeholder="Contact no."
          className="form-control inp"
          onKeyDown={keyPress}
        />
        <input
          type="email"
          name="email1"
          className="form-control inp"
          placeholder="Your email"
          id="email"
          onKeyDown={keyPress}
        />
        <ToastContainer />
        <input
          name="passwd1"
          type="password"
          className="form-control inp"
          placeholder="password"
          id="passwd"
          onKeyDown={keyPress}
        />
        <div className="row r">
          <div className="col-6">
            <button id="btn" className="btn btn-primary" onClick={handleClick}>
              Submit
            </button>
          </div>
          <div className="col-6 reg">
            <Link to="/login" style={{ color: "blue" }}>
              Login
            </Link>
          </div>
        </div>
        <span id="msg"></span>
      </div>
    </div>
  );
}
export default Register;
