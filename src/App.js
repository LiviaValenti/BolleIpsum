import Oven from './components/Oven';
import { createGlobalStyle } from 'styled-components';


function App() {
  return (
      <>
        <GlobalStyle/>
        <Oven/>
      </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
  }
`