// export function MyElement() {
//   const data = false;
//   return <section>{data ? <h1>Verdadero</h1> : <h1>falso</h1>}</section>;
// }

// export const user = {
//   name: "Victor",
//   lastName: "Rodriguez",
// };
import PropTypes from "prop-types";
export function Section(props) {
  return (
    <section
      id={props.id}
      className="section"
      style={{ backgroundColor: props.bg }}
    >
      <h1>{props.title}</h1>
    </section>
  );
}
Section.propTypes = {
  bg: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
};
Section.defaultProps = {
  bg: "red",
  title: "Some",
  id: "Some",
};
