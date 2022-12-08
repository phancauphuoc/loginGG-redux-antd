import { Button, InputNumber } from 'antd';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import './style.css';
//import 'bootstrap/dist/css/bootstrap.min.css'

const CartComponent = () => {

    //const carts = useSelector(state => state.cart.carts);

    const [carts, setCarts] = useState(useSelector(state => state.cart.carts));

    // console.log("carts is", carts);
    const handleRemoveItem = (e) => {
        console.log("heheheheh", e.target.value);
    }
    const handleQuantity = (index, value) => {
        carts[index].quantity = value;
        const newCarts = [...carts];
        console.log("hjhj", carts);
        setCarts(newCarts);
    }

    carts.forEach(element => {
        console.log('hehe', element.price);
    });




    useEffect(() => {
        // console.log("1");
        const newCarts = carts.map(item => ({ ...item, quantity: 1 }))
        // setCarts(newCarts);
        console.log("setCart", newCarts);
    }, [])



    return (
        <>
            <div className="wrapper">
                <Link to='/home'>
                    <Button className='wrapper-btn' type='primary'>Continue Shopping</Button>
                </Link>
                <h1>Shopping Cart</h1>
                <div className="project">
                    <div className="shop">
                        {
                            carts.map((item, index) => {
                                return (
                                    <div className="box" key={index}>
                                        <img src={item.image} />
                                        <div className="content">
                                            <h3>{item.title}</h3>
                                            <h4>Price: ${item.price}</h4>
                                            <h4 className="unit">Quantity: <InputNumber min={1} max={10} defaultValue={1} onChange={(value) => handleQuantity(index, value)} /></h4>
                                            <p onClick={(value) => handleRemoveItem(value)} className="btn-area"><i className="fa fa-trash" /> <span value={index} className="btn2">{index}Remove</span></p>
                                            {
                                                item.quantity ?
                                                    <p>Total: ${item.price * item.quantity}</p> :
                                                    <p>Total: ${item.price}</p>
                                            }

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="right-bar">

                        <p><span>Total</span> <span>$141</span></p><a href="#"><i className="fa fa-shopping-cart" />Checkout</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartComponent