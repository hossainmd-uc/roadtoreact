import React, { useState } from 'react'

const ShoppingList = () => {

    const [shoppingList, setShoppingList] = useState([]);

    const submit = (e) => {
        console.log("submitting")
        e.preventDefault()
        const thing = e.target.elements.thing.value.trim()
        const quantity = e.target.elements.quantity.value.trim()

        if (thing && quantity) {
            //console.log(shoppingList.length)
            setShoppingList(prev => {
                for (let p=0; p < prev.length ;p++){
                    if (shoppingList[p].item === thing){
                        //console.log(prev.slice(0, p));
                        return [...prev.slice(0, p), {item: thing, quantity: parseInt(quantity) + shoppingList[p].quantity}, ...prev.slice(p + 1)]
                    }
                }
                return [...prev, {item: thing, quantity: parseInt(quantity)}];
            })
        }

    }

  return (
    <div>
        <div>
            <h3 className='font-bold text-xl'>Shopping List</h3>
            {shoppingList.map((object, i) => {
                return(<li key={i} > <span className='font-bold'>{object.quantity}</span> {object.item} </li>)
            })}
        </div>

        <form onSubmit={submit}>
            <div>
                <div>
                    <label >Item Name: </label>
                    <input name="thing"/>
                </div>
                <div>
                    <label>Quantity: </label>
                    <input name="quantity"/>
                </div>
            </div>
            <button type='submit' className='hover:bg-blue-600 bg-blue-500 rounded p-1'>Add Item</button>
        </form>
    </div>
  )
}

export default ShoppingList