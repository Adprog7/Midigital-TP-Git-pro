<<<<<<< HEAD
import Navbar from './components/Navbar';
import Accueil from './components/page-accueil';
=======
import React from 'react'
import About from './About' // On importe ton nouveau composant
import './App.css'
import Produits from './Produits'
>>>>>>> 4fd76c0817b876dff30f956574249bc9d405056c

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* La Navbar est ici, donc elle sera visible partout */}
      <Navbar /> 
      
      <main>
        <Accueil />
      </main>
    </div>
  );
=======
      {/* Ici, on pourrait mettre une barre de navigation plus tard */}
      
      <main>
        <Produits />
      </main>
      
      {/* Footer simple pour rester dans le thème */}
      <footer style={{ textAlign: 'center', padding: '40px', background: '#f4eee0', color: '#3e2723' }}>
        <p>© 2026 Artisan Bakery - Fait avec passion</p>
      </footer>
    </div>
  )
>>>>>>> 4fd76c0817b876dff30f956574249bc9d405056c
}

export default App;