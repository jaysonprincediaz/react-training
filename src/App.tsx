import React from 'react';
import NavBar from 'src/components/navbar/NavBar';
import MainRoutes from './routes';

function App(): React.ReactElement {
  return (
    <div>
      <NavBar />
      <MainRoutes />
    </div>
  );
}

export default App;
