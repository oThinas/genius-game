import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#12161C',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },
  score: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  board: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
    color: '#FFF',
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    width: 100,
    height: 100,
  },
  playButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#12161C',
    borderRadius: 9999,
    width: 90,
    height: 90,
    zIndex: 1,
  },
  playButtonText: {
    color: '#FFF',
    fontSize: 20,
  }
})
