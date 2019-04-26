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
    height: 125,
    marginTop: 70,
    marginBottom: -25
  },
  itemName: {
    fontSize: 16,
    color: '#555',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  textPartner:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 15,
    marginBottom: -30
  },
});

export default styles;
