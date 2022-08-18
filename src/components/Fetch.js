const getUser = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
};
export const Button = () => {
  return <button onClick={getUser}>Traer Datos</button>;
};
