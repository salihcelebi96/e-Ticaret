import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../redux/categorySlice";
import productSlice from "../redux/productSlice";
import sizeSlice from "../redux/sizeSlice";
import basketSlice from "../redux/basketSlice";
import favoriSlice from "../redux/favoriSlice";




export const store = configureStore({
    reducer: {
        categories : categorySlice,
        products :  productSlice,
        size : sizeSlice,
        basket : basketSlice,
        favori : favoriSlice
       
        
        


    },
})
