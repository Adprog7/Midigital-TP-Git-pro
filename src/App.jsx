import Navbar from './components/Navbar';
import Accueil from './components/page-accueil';

function App() {
  return (
    <div className="App">
      {/* La Navbar est ici, donc elle sera visible partout */}
      <Navbar /> 
      
      <main>
        <Accueil />
      </main>
    </div>
  );
}

export default App;