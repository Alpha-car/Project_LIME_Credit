import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#BBD64D',
    borderTopWidth: 1,
    width: 26,
  },
  columns: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#BBD64D',
    borderTopWidth: 1,
    borderLeftWidth: 1,
  },
  text: {
    color: '#BBD64D',
  },
});

export default styles;