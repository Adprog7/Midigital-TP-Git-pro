import React from 'react'
import About from './About' // On importe ton nouveau composant
import './App.css'

function App() {
  return (
    <div className="App">
      {/* Ici, on pourrait mettre une barre de navigation plus tard */}
      
      <main>
        <About />
      </main>

      {/* Footer simple pour rester dans le thème */}
      <footer style={{ textAlign: 'center', padding: '40px', background: '#f4eee0', color: '#3e2723' }}>
        <p>© 2026 Artisan Bakery - Fait avec passion</p>
      </footer>
    </div>
  )
}

export default App
