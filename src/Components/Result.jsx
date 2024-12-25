function Result({ value }) {
  return (
    <div className="whole_table_div">
      <table>
        <thead>
          <tr>
            <th>Years</th>
            <th>Total Investment</th>
            <th>Interest Amount</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {value.length === 0 ? (
            <tr>
              <td colSpan="4">No data available</td>
            </tr>
          ) : (
            value.map((item) => (
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>{item.Total_investment}</td>
                <td>{item.Interest_earned}</td>
                <td>{item.Futurevalue}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Result;
