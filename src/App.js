import './App.css';
import Welcome from './components/welcome/welcome';
import ElementStyle from './components/element-style/element-style';
import WelcomeExo  from './components/bienvenue/bienvenue';

function App() {
  return (
    <div className="App">
        <Welcome name="Zaza" />
        <ElementStyle />
        <ElementStyle nb1={20} nb2={1} />
        <WelcomeExo name={'Gianni'} age={36} />
        
    </div>
  );
}

export default App;
