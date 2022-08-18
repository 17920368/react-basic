const style_button = {
  padding: "20px",
  borderRadius: "20px",
  backgroundColor: "#4D88D9",
  fontWeight: "bolder",
};
const handleOnClick = (e) => {
  alert("click");
};
export const Button = () => {
  return (
    <button style={style_button} onClick={handleOnClick}>
      Click me!
    </button>
  );
};
