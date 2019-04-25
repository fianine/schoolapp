import { connect } from 'react-redux';
import Partnership from '../components/Partnership';

const mapStateToProps = (state) => {
  return state.Partnership;
};

export default connect(mapStateToProps)(Partnership);
