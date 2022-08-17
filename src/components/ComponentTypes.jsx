import PropTypes from "prop-types";
function HelloWorldComponent({ name }) {
  return <div>Hello, {name}</div>;
}
HelloWorldComponent.defaultProps = {
  name: "Stranger",
};
HelloWorldComponent.propTypes = {
  name: PropTypes.string,
};
export default HelloWorldComponent;
