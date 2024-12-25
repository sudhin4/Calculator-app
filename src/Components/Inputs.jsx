

function Input( {getinitial,getinterest,getduration,clicksubmit,interestRate,duration}) {
  return (
    <div className="Whole_input_div">
      <div className="first_row_input">
        <li>
          <label>Monthy Investment</label>
          <br />
          <input
            type="number"
            className="input"
            placeholder="Enter a Amount"
            required
            id="Monthlyinvestment"
            onChange={getinitial}
            
          />
        </li>
        <li>
          <label>Intrest Rate %</label> <br />
          <input
            type="number"
            className="input"
            required
            id="interestrate"
            value={interestRate}
            placeholder="Percentage"
            onChange={getinterest}
          />
        </li>
        <li>
          <label>Duration</label> <br />
          <input
            type="number"
            className="input"
            required
            id="Duration"
            value={duration}
            placeholder="Years"
            onChange={getduration}
          />
        </li>
      </div>
      <button onClick={clicksubmit}>Calculate</button>
    </div>
  );
}

export default Input;
