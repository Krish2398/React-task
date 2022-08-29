import { useState } from "react";
import Welcomepage from "./Welcomepage";

function Loginpage() {
  let [inputs, setInputs] = useState({});
  const Change = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(inputs);

    Welcome();
    return <Welcomepage />;
  };

  function Welcome() {
    alert(`Welcome to Splitwise ${inputs.username}`);
  }
  return (
    <>
      <form className="container" onSubmit={handleClick}>
        <div className="row">
          <div className="col mt-3">Log in to SplitWise</div>
          <div className="col-12 mt-2">
            <input
              className="ml-1"
              type="text"
              name="username"
              value={inputs.username || ""}
              placeholder=" Username"
              onChange={Change}
            />
          </div>

          <div className="col-12 mt-3">
            <input
              className="ml-1"
              type="password"
              name="password"
              value={inputs.password || ""}
              placeholder="Password"
              onChange={Change}
            />
          </div>

          <div className="col mt-5 mb-5 ">
            <button className="btn btn-primary px-5">Login</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Loginpage;
