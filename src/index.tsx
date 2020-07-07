import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const Text = styled.div``;

const App = () => {
  return <Text>aaaa</Text>;
};

export default App;
ReactDom.render(<App />, document.getElementById('app-root'));
