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
    },
];

function categorySelected() {
    console.log("hello")
}

function Nav() {

  return (
    <nav>
        <ul className="flex-row">
            {/* <li className="mx-2">
                <a href="#about">
                    About Me
                </a>
            </li>
            <li className="mx-2">
                <span>
                    Portfolio
                </span>
            </li>
            <li className="mx-2">
                <span>
                    Contact
                </span>
            </li>
            <li className="mx-2">
                <span>
                    Resume
                </span>
            </li> */}
            {categories.map((category) => (
            <li
                className="mx-1"
                key={category.name}
            >
                <span onClick={categorySelected} >
                {category.name}
                </span>
            </li>
            ))}
        </ul>
    </nav>
  );
}

export default Nav;