import "./App.css";
import Card from "./Card";
import students from "./data";

function App() {
  return (
    <div className="App">
      <h1>Attendance</h1>
      <div className="cardContainer">
        {students.map((student) => (
          <Card name={student.name} roll={student.roll} />
        ))}
      </div>
    </div>
  );
}

export default App;
