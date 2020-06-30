import React from 'react'
import { Navbar, NavbarBrand } from "reactstrap";

export default function() {
    return (
        <div className="fixed-bottom">  
            <Navbar color="dark" dark >
                <NavbarBrand style={{fontSize: 15}}>Created by Futori Moyashi</NavbarBrand>
            </Navbar>
        </div>
    )
}