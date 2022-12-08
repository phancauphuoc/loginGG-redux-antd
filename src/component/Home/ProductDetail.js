import { InputNumber } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { setCart } from '../../redux/actions/cartActions';
import { selectedProduct, selectedProductAct } from '../../redux/actions/productActions';

const ProductDetail = () => {

    const { productId } = useParams();


    let product = useSelector(state => state.productDetail.productss);
    const dispatch = useDispatch();
    // console.log("product compo detail", product);
    // console.log("id product", productId);
    let total = product.price;
    const [amount, setAmount] = useState(1);


    const [total1, setTotal1] = useState(0);
    useEffect(() => {
        dispatch(selectedProductAct(productId));
    }, [])


    const handleQuantity = (value) => {
        setTotal1(value * total);
        //console.log("total is", total1);
        setAmount(value);
    }

    //console.log("amout", amount);
    const carts = useSelector(state => state.cart);
    const handleAddProdut = () => {
        localStorage.setItem('amount', amount);
        dispatch(setCart(productId));
        alert('Product add cart success');
        //console.log("carts isss", carts);

    }


    return (
        <>
            <div className="pill-nav">
                <Link to='/home'>
                    Home
                </Link>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <div className='shopping dropdown'>
                    <Link to="/carts">

                        <div className="cart">
                            <img src="https://res.cloudinary.com/phancauphuoc/image/upload/v1659428589/web_2107/img-web-last2/shopping-bag_u1xa27.svg" alt="" />
                            <div className="cart_num_container">
                                <div className="cart_num_inner">
                                    <div className="cart_num">{localStorage.getItem('amount')}</div>
                                </div>
                            </div>
                        </div>

                    </Link>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div>
            <div className="wrapperDetail">
                <div className="product-img">
                    <img src={product.image} height={420} width={327} />
                </div>
                <div className="product-info">
                    <div className="product-text">
                        <h2>Name: {product.title}</h2>

                        <p>{product.description}</p>
                    </div>
                    <InputNumber min={1} max={10} defaultValue={1} onChange={handleQuantity} />
                    <div className="product-price-btn">
                        {
                            total1 === 0 ?
                                <p>{product.price} $</p> :
                                <p>{total1} $</p>
                        }
                        <button type="button" onClick={handleAddProdut}>Add to cart</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductDetail