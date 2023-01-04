import CheckStudent from "./CheckStudent";
import InputStudent from "./InputStudent";
import { useState } from "react";

function App() {
  const [register, setRegister] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Student Attendance System</h1>
      <InputStudent setRegister={setRegister} setCount={setCount} />
      <CheckStudent count={count} register={register} />
    </div>
  );
}

export default App;
