import React, { Component } from 'react'

export const CartContext = React.createContext()

export class CartProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            CartItem: []
        }
        this.addToCart = this.addToCart.bind(this)
    }

    addToCart(product) {
        console.log(product)
        this.setState({
            CartItem: this.state.CartItem.concat(product)
        })
    }

    render() {
        return <CartContext.Provider value={{
            cartItem: this.state.CartItem,
            addToCart: this.addToCart
        }}>
            {this.props.children}
        </CartContext.Provider>
    }
}