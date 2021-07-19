import React, { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

  const [categorySelected, setCategorySelected] = useState();

  const selected = () => {
    switch(categorySelected) {
      case "About Me":
        return <About></About>;
      case "Portfolio":
        return <Portfolio></Portfolio>;
      case "Contact":
        return <Contact></Contact>;
      case "Resume":
        return <Resume></Resume>;
      default:
        return <About></About>;
    };
  };

  return (
    <div>
      <Header categorySelected={categorySelected} setCategorySelected={setCategorySelected}></Header>
      <main>
        {selected()}
      </main>
      <div>
        <Footer></Footer>
      </div>
      
    </div>
  );
}

export default App;