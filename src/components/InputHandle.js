const handleOnChange = (e) => {
  console.log(e.target.value);
};
export const Input = () => {
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" onChange={handleOnChange}></input>
    </div>
  );
};
