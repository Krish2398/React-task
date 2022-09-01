import { useContext } from "react";
import { NameContext } from "./Loginpage";

const Welcomepage = () => {
  const Name = useContext(NameContext);
  return (
    <>
      <h1>Welcome To SplitWise {Name}</h1>
    </>
  );
};

export default Welcomepage;
