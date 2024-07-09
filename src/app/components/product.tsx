"use client"
import { useState, useEffect } from "react";
// Fetch photos from JSONPlaceholder API or ANY API returning JSON
const Product = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        // fetch('https://dummyjson.com/products')    
        .then((res) => {
            return res.json();
        })
        .then((data) => {            
            data = data.slice(0,50)
            console.log(data);
            setProduct(data);
        });
    }, []);

    return (
        <div className="bg-gray-900 container mx-auto rounded-sm py-12 px-10 columns-3 sm:columns-4 md:columns-5 lg:columns-6 gap-5">
            {product.map((prod) => {
                return (
                    <div className="basis-1/5 md:basis-1/6 m-5 lg:m-2 bg-gray-700 rounded-lg shadow-2xl overflow-hidden hover-lime" key={prod.id}>
                        <a href="#" key={prod.id}>                        
                            <img className="w-full h-full object-cover object-center" src={prod.thumbnailUrl} alt={prod.title} />
                            <div className="antialiased text-sm text-center text-gray-200 font-semibold tracking-wide p-6">
                                <h3>{prod.title}</h3>
                                <p className="text-gray-400">Price: $</p>
                            </div>      
                            <div className="hidden">
                                <div className="antialiased text-sm text-center text-gray-200 font-semibold tracking-wide p-6 flex">
                                    <div className="">
                                        <h3>{prod.title}</h3>
                                        <img className="" src={prod.url} />"
                                        <p className="text-gray-400">Price: $</p>
                                    </div>
                                    <div className="description"></div>
                                </div>
                            </div>
                        </a>                  
                    </div>
                );
            })}
        </div>
    );
    };
    export default Product;