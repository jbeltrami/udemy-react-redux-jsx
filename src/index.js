// Import React and ReactDOM libs

import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  const buttonText = 'Click Me!';

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
        <input id="name" type="text" />
      </label>

      <button type="button" style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText}
      </button>
    </div>
  );
};

// Render created component to the DOM.
ReactDOM.render(<App />, document.getElementById('root'));
