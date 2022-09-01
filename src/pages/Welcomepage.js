import { useContext } from "react";
import { NameContext } from "./Loginpage";

const Welcomepage = () => {
  const { username1 } = useContext(NameContext);
  return (
    <>
      <h1 className="textAlignCenter">Welcome To SplitWise {username1} </h1>
    </>
  );
};

export default Welcomepage;
