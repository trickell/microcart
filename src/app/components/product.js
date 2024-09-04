"use client"
import { useState, useEffect } from "react";
import Image from 'next/image';
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
            data = data.slice(0,10)
            console.log(data);
            setProduct(data);
        });
    }, []);

    return (
        <div className="product rounded-sm py-12 px-10 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
            {product.map((prod) => {
                return (
                    <div className="product basis-1/5 md:basis-1/6 m-5 lg:m-2 bg-gray-700 shadow-2xl hover-lime rounded overlow-hidden p-10" key={prod.id}>
                        <a href="#" key={prod.id}> 
                            <div className="flex justify-center items-center product-img">
                                <div className="w-full max-w-lg p-4">
                                    <Image className="w-9/10 mx-auto rounded-full" layout="responsive" width={100} height={100} src={prod.thumbnailUrl} alt={prod.title} />
                            </div>

                            </div>
                            <div className="antialiased text-sm text-center text-gray-200 font-semibold tracking-wide p-6">
                                <h3>{prod.title}</h3>
                                <p className="text-gray-400">Price: $</p>
                            </div>      
                            <div className="hidden">
                                <div className="antialiased text-sm text-center text-gray-200 font-semibold tracking-wide p-6 flex">
                                    <div className="">
                                        <h3>{prod.title}</h3>
                                        <Image className="w-full" width={100} height={100} alt={prod.title} src={prod.url} />
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