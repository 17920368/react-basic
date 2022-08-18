import { useState } from "react";
export const Form = () => {
  const [name, setName] = useState("");
  return (
    <form>
      <label htmlFor="user">Nombre de usuario</label>
      <input
        id="user"
        type="text"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => alert(name)}>Save</button>
    </form>
  );
};
