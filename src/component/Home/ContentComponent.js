import { Col, Divider, Row } from 'antd'
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchProducts, setProduct } from '../../redux/actions/productActions';
import { setLoginUser } from '../../redux/actions/LoginActions'
import './style.css'

const ContentComponent = () => {
    const style = {
        background: '#0092ff',
        padding: '8px 0',
    };

    const product = useSelector((state) => state.allProducts.productss);

    const dispatch = useDispatch();
    const fetchProductss = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("err", err);
            })
        dispatch(setProduct(response.data))

    }

    useEffect(() => {
        // fetchProducts();
        dispatch(fetchProducts());
    }, [])

    //console.log("product", product);
    // console.log("fetch", fetchProducts());

    return (
        <>
            {/* <Divider orientation='left' style={{ height: 'fit-content' }}>Product</Divider><br /> */}
            <Row gutter={16} style={{ width: '100%' }}>
                {product.map(item => {
                    return (
                        <Col className="gutter-row" span={8} key={item.id}>
                            <Link to={`/product/${item.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <div className='item'>
                                    <img src={item.image} />
                                    <h3>{item.title}</h3>
                                    <h2>$ {item.price}</h2>
                                </div>
                            </Link>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default ContentComponent