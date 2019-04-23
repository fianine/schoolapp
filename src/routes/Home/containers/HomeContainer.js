import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state) => {
  return state.Home;
};

export default connect(mapStateToProps)(Home);
