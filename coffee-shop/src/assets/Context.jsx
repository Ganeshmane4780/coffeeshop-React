import React, { createContext, useContext, useReducer } from 'react'
import { cartReducer, ProductReducer } from './Reducers'
const prods=createContext()

function Context({children}) {
    let coffee=[
        {
            id:1,
            name:"Cold Coffee",
            image:"./images/img-1.png",
            price:100,
            stock:10,
            qty:1
        },
        {
            id:2,
            name:"Cappuccino",
            image:"./images/img-2.png",
            price:150,
            stock:5,
            qty:1
        },
        {
            id:3,
            name:"Tea",
            image:"./images/img-3.png",
            price:120,
            stock:0,
            qty:1
        },
        {
            id:4,
            name:"Hot Coffee",
            image:"./images/img-4.png",
            price:100,
            stock:10,
            qty:1
        },
        {
            id:5,
            name:"Coffee with cake",
            image:"./images/img-5.png",
            price:200,
            stock:0,
            qty:1
        },
        {
            id:6,
            name:"Apple flavour Coffee",
            image:"./images/img-6.png",
            price:150,
            stock:9,
            qty:1
        },
        {
            id:7,
            name:"Ice Coffee",
            image:"./images/Iced Coffee.jpg",
            price:210,
            stock:10,
            qty:1
        },
        {
            id:8,
            name:"Black Coffee",
            image:"./images/img-8.png",
            price:100,
            stock:10,
            qty:1
        },
        {
            id:9,
            name:"Lattee ",
            image:"./images/img-9.png",
            price:200,
            stock:8,
            qty:1
        },
        {
            id:10,
            name:"Americano ",
            image:"./images/Americano.jpg",
            price:170,
            stock:10,
            qty:1
        },
        {
            id:11,
            name:"Doppio ",
            image:"./images/Doppio.jpg",
            price:230,
            stock:5,
            qty:1
        },
        {
            id:12,
            name:"Espresso ",
            image:"./images/espresso.jpg",
            price:150,
            stock:0,
            qty:1
        },
        {
            id:13,
            name:"Macchiato ",
            image:"./images/Macchiato.jpg",
            price:250,
            stock:10,
            qty:1
        },
        {
            id:14,
            name:"Matcha Lattee ",
            image:"./images/Matcha Latte.jpg",
            price:220,
            stock:7,
            qty:1
        },
        {
            id:15,
            name:"Mocha Coffee",
            image:"./images/Mocha.jpg",
            price:230,
            stock:0,
            qty:1
        },
    ]
    const [state,dispatch]=useReducer(cartReducer,{
        products:coffee,
        cart:[]
    })
    const [productstate,productdispatch]=useReducer(ProductReducer,{
        stock:false,
        searchQuery:""
    })
  return (
    <prods.Provider value={{state,dispatch,productstate,productdispatch}}>
        {children}
    </prods.Provider>
  )
}

export default Context
export const cartState=()=>{
    return useContext(prods)
}
