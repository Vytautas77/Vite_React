const App = () => {
  // let x = "GreatStack";
  // let array = ["user1", "user2", "user3", "user4", "user5"];
  let data = "girl";

  return (
    <div>
      {/* {x}
      {array.map((user) => {
        return <h2>{user}</h2>;
      })} */}
      {data === "boy" ? <h1>Boy</h1> : <h1>Girl</h1>}
    </div>
  );
};

export default App;
