import { connect } from 'react-redux'
import { selectName } from '../store/selectors';
import Hello from './Hello';
// import { selectName } from '../store/selectors';
// import Hello from './Hello';

// function HelloContainer() {
//   // store ???
//   const name = selectName(store);

//   return <Hello name={name} />
// }

export function mapStateToProps(state) {
  return {
    name: selectName(state),
  };
}

const createContainer = connect(mapStateToProps);

// const HelloContainer = createContainer(Hello);
export default createContainer(Hello);