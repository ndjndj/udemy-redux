import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1>Hello, world!</h1>
//         <p>Welcome to React.</p>
//       </React.Fragment>
//       
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
}

const Cat = () => {
  return (
    <div>CAT</div>
  );
}

export default App;
