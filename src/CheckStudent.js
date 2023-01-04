import { useEffect } from "react";

export default function CheckStudent({ count, register }) {
  useEffect(() => {
    console.log(register);
  }, [count, register]);

  return (
    <div className="CheckStudent">
      <h2>Check Student</h2>
      <p>Present Student Count: {count}</p>
    </div>
  );
}
