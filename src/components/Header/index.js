import React from 'react';
import Nav from '../Nav';


function Header (props) {
    const { categorySelected, setCategorySelected } = props;
    return (
        <header className="flex-row align-items-center">
            <h1>hellokedakai</h1>
            <Nav 
            categorySelected = {categorySelected} setCategorySelected={setCategorySelected}
            ></Nav>
        </header>
    );
}

export default Header;