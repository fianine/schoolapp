import { connect } from 'react-redux';
import Login from '../components/Login';

const mapStateToProps = (state) => {
  return state.login;
};

export default connect(mapStateToProps)(Login);
