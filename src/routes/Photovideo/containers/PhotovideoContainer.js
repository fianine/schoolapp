import { connect } from 'react-redux';
import Photovideo from '../components/Photovideo';

const mapStateToProps = (state) => {
  return state.Photovideo;
};

export default connect(mapStateToProps)(Photovideo);
