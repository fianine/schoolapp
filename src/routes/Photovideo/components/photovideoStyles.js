import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  icon:{
    color: '#FFF',
    fontSize: 20
  },
  headerText:{
    color: '#FFF',
    fontSize: 14
  },
  logo:{
    width: 100,
    height: 50
  },
  body:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 5,
    paddingTop: -100,
    height: 120,
    marginTop: 70,
    marginBottom: -25
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  textPhoto:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 15
  },
});

export default styles;
