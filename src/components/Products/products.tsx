import React from "react";
import { useEffect } from 'react';
import { ProductContainer } from "./ProductContainer/productContainer"
import { useAppDispatch, useTypedSelector } from '../../redux/store/store';
import { getProducts } from '../../redux/reducers/productsSlice'
import { PreLoaderTable } from '../Gallery/PreLoaderTable/preLoaderTable';

const Products = () => {
    const dispatch = useAppDispatch()
    const status = useTypedSelector((state => state.products.status))
    useEffect(() => {
        // @ts-ignore: Unreachable code error
        dispatch(getProducts())
    }, [])


    return (
        <div>
            <div>
                {status === 'loading' ? <PreLoaderTable /> : status === 'success' ? < ProductContainer /> : 'Error'}
            </div>
        </div>
    );
};

export default Products;

