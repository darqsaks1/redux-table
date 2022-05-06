import React from "react";
import { useEffect } from 'react';
import { ProductCard } from '../ProductCard/productCard'
import { useAppDispatch, useTypedSelector } from '../../../redux/store/store';
// import { getProducts } from '../../redux/reducers/productsSlice'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export const ProductContainer = () => {

    const products = useTypedSelector((state => state.products.products))
    // const dispatch = useAppDispatch()
    // useEffect(() => {
    //     // @ts-ignore: Unreachable code error
    //     dispatch(getProducts())
    // })



    return (
        <div className='productsContainer'>
            <Container>
                <Row>
                    {products && products.map((item: any, index: number) => {
                        return <Col xs={6} md={4}>  x<ProductCard item={item} key={index} /> </Col>
                    })}
                </Row>
            </Container>

        </div>
    );
}

// export   ProductContainer