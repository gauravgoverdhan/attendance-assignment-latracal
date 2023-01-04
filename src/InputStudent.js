import { useState } from "react";

export default function InputStudent({ setRegister, setCount }) {
  const [regno, setRegno] = useState("");
  const [name, setName] = useState("");

  function handleCheckin(e) {
    if (regno === "" || name === "") {
      return;
    }

    e.preventDefault();

    setRegister((prev) => {
      const record = prev.findIndex((rec) => {
        return rec.registrationNumber === regno && rec.checkoutTime === null;
      });

      if (record === -1) {
        prev.push({
          studentName: name,
          registrationNumber: regno,
          checkinTime: new Date(),
          checkoutTime: null,
        });
        alert("Student checked in!");
        setCount((prev) => prev + 1);
        return prev;
      } else {
        alert("Student already checked in!");
        return prev;
      }
    });

    setRegno("");
    setName("");
  }

  function handleCheckout(e) {
    if (regno === "" || name === "") {
      return;
    }

    e.preventDefault();

    setRegister((prev) => {
      const record = prev.findIndex((rec) => {
        return rec.registrationNumber === regno;
      });

      if (record !== -1) {
        prev[record].checkoutTime = new Date();
        alert("Student checked out!");
        setCount((prev) => prev - 1);
        return prev;
      } else {
        alert("Student record doesn't exist!");
        return prev;
      }
    });

    setRegno("");
    setName("");
  }

  return (
    <div className="InputStudent">
      <h2>Input Student Details</h2>
      <form>
        <input
          type="text"
          placeholder="Registration no."
          onChange={(e) => setRegno(e.target.value)}
          value={regno}
          required
        />
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <br />
        <button onClick={handleCheckin}>Checkin</button>
        <button onClick={handleCheckout}>Checkout</button>
      </form>
    </div>
  );
}
