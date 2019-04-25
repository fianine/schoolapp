import { connect } from 'react-redux';
import Calendar from '../components/Calendar';

const mapStateToProps = (state) => {
  return state.Calendar;
};

export default connect(mapStateToProps)(Calendar);
