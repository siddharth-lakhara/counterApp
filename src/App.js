import React from 'react';
import initStore from './redux/store';
import { Provider } from 'react-redux';
import Button from './button';
import TextShow from './textshow';

const store = initStore;

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
        Hello <br />
          <TextShow />
          <Button />
        </div>
      </Provider>
    );
  }
}

export default App;
