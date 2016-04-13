import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right',
    flex: '1 1 100%'
  },
  input: {
    flex: '0 1 auto'
  },
  button: {
    margin: 10,
    flex: '0 1 auto'
  },
};

function renderCity(props) {
  return (
    <div style={styles.container}>
      <input style={styles.input} className="form-control" type="text" placeholder="City, State" />
      <button style={styles.button} className="btn btn-success" type="button">Get Weather</button>
    </div>
  );  
}

export default renderCity;