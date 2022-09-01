import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  const [inputs, setInputs] = useState({});
  const [type, setType] = useState("password");
  const { setUsername1 } = useContext(NameContext);
  const navigate = useNavigate();
  const Change = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  function Eye() {
    type === "password" ? setType("text") : setType("password");
  }
  const handleClick = (event) => {
    event.preventDefault();
    console.log(inputs);
    Welcome();
  };

  function Welcome() {
    setUsername1(inputs.username);
    alert(`Welcome to Splitwise ${inputs.username}`);
    navigate("/Welcomepage");
  }

  return (
    <>
      <form className="container" onSubmit={handleClick}>
        <div className="row">
          <div className="col-12 mt-3">Log in to SplitWise</div>
          <div className=" mt-2 ">
            <input
              className="ml-5 w-10 box"
              type="text"
              name="username"
              value={inputs.username || ""}
              placeholder=" Username"
              onChange={Change}
            />
          </div>

          <div className=" mt-3 ml-5 outline1 ">
            <input
              className=" outline "
              type={type}
              name="password"
              value={inputs.password || ""}
              placeholder="Password"
              onChange={Change}
            />
            {type === "password" ? (
              <i class="fa-regular fa-eye" onClick={Eye}></i>
            ) : (
              <i className="fa-regular fa-eye-slash" onClick={Eye}></i>
            )}
          </div>

          <div className="col mt-5 mb-5 ">
            <button className="btn btn-primary px-5">Login</button>
          </div>
        </div>
      </form>
    </>
  );
}

// export function NameProvider() {
//   const nameContext = useContext(NameContext);
// }
export default Loginpage;

export const NameContext = createContext();
export const NameProvider = ({ children }) => {
  const [username1, setUsername1] = useState();

  return (
    <NameContext.Provider value={{ username1, setUsername1 }}>
      {children}
    </NameContext.Provider>
  );
};
