import { connect } from "react-redux";
import { incrementCount } from "../store/actions";
import { selectCount } from "../store/selectors";
import Count from "./Count";

export function mapStateToProps(state) {
  return {
    increment: selectCount(state),
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    onIncrement() {
      dispatch(incrementCount());
    },
  };
}

const createContainer = connect(mapStateToProps, mapDispatchToProps);

export default createContainer(Count);
