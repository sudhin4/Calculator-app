import Header from "./Components/Header";
import logo from "./Images/Moneyback.png";
import "../src/index.css";
import Inputs from "./Components/Inputs";
import { useState } from "react";
import Result from "./Components/Result";

function App() {
  const [investamount, setinvestmentamount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [duration, setduration] = useState("");
  const [yearsTotal, setYearsTotal] = useState([]);

  // Function to get a value and setting a max value
  const getintialamount = (e) => {
    const amountvalue = e.target.value; // amountvalue
    setinvestmentamount(amountvalue);
  };

  const getsetinterest = (e) => {
    const interestvalue = e.target.value; // interestvalue

    if (
      interestvalue === "" ||
      (Number(interestvalue) <= 100 && Number(interestvalue) >= 0)
    ) {
      setInterestRate(interestvalue);
    }
  };
  const getduration = (e) => {
    const durationvalue = e.target.value; // durationvalue

    if (
      durationvalue === "" ||
      (Number(durationvalue) <= 50 && Number(durationvalue) >= 0)
    ) {
      setduration(durationvalue);
    }
  };
  let years_Total = [];
  function clicksubmit(){
  // initialize a variable
    
  let yearinterestrate = interestRate/100;
  let monthlyinterestrate = yearinterestrate/12;
  let cumaltiveinvestment ;
  let futurevalue ;
  let interestearned ;

  //using for loop for every year values
   for(let i = 1 ; i<=duration;i++){
    let months = i * 12;
    cumaltiveinvestment = investamount * months;
    futurevalue = investamount *((1+monthlyinterestrate)**months-1)/monthlyinterestrate*(1+monthlyinterestrate);
    interestearned = futurevalue-cumaltiveinvestment;
  
  years_Total.push({
        year : i,
        Total_investment: Math.round(cumaltiveinvestment,2),
        Futurevalue :  Math.round(futurevalue,2),
        Interest_earned : Math.round(interestearned,2)
  })
}
  setYearsTotal(years_Total)
}
  return (
    <>
      <Header image={logo} name="SIP Calculator"></Header>
      <Inputs
        getinitial={getintialamount}
        getinterest={getsetinterest}
        getduration={getduration}
        clicksubmit = {clicksubmit}
        valueinterest = {interestRate}
        valueduration = {duration}
      ></Inputs>
      <Result value = {yearsTotal}></Result>
      <h4 className="develop">Develop by Sudhinnaveen38@gamil.com</h4>
    </>
  );
}
export default App;
