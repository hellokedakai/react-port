import React from 'react';

const categories = [
    {
      name: "About Me",
      description:
        "About Me",
    },
    { name: "Portfolio", description: "Portfolio" },
    { name: "Contact", description: "Contact" },
    {
      name: "Resume",
      description: "Resume",
    }
];

function Nav(props) {

    const {categorySelected, setCategorySelected} = props;


  return (
    <nav className="navbar align-items-center">
        <ul className="container-fluid navbar-text">
            {categories.map((category) => (
            <li
                className= {categorySelected === category.name}
                
                key={category.name}
            >
                <span 
                className="m-1"
                onClick={() => setCategorySelected(category.name)} 
                >
                {category.name}
                </span>
            </li>
            ))}
        </ul>
    </nav>
  );
}

// function categorySelected(name) {
//     console.log(`${name} clicked`)
// }

export default Nav;