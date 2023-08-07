import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios'
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';


const ProductListing = () => {
    const products = useSelector((state)=>state);
    console.log(products)
    const dispatch = useDispatch();

    const fetchProducts = async()=>{
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch(err=>{
            console.log('Err', err)
        })   
        dispatch(setProducts(response.data))
    }

    useEffect(()=>{
        fetchProducts()
    },[]);
  return (
    <div className='ui grid container'
    style={{marginTop:'50px'}}
    >
        <ProductComponent/>
    </div>
  )
}

export default ProductListing