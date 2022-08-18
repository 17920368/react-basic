const users = [
  {
    id: 1,
    name: "usuario1",
  },
  {
    id: 2,
    name: "usuario2",
  },
  {
    id: 3,
    name: "usuario3",
  },
];
export function Card() {
  users.map((element, index) => {
    return (
      <div key={index}>
        <h1>{element.name}</h1>
        <p>Numero de usuario: {element.id}</p>
      </div>
    );
  });
}
