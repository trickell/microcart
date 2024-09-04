"use client"
import react from 'react';
import { NextResponse } from 'next/server';
import Product from '../../components/product';
import { useForm } from 'react-hook-form';

export default function Page({ params }, req, res) {
    
    const body = (req) ? async () => { return await req.json(); } : null;
    const { register, handleSubmit, formState: {errors} } = useForm({ mode: 'all', reValidateMode: 'onChange', criteriaMode: 'all', shouldFocusError: true });

    return (
        <div>
            <header>
                My Shop Name: {(params.slug).replaceAll('-', ' ')}
                { (body && body.shopUrl) ? <p>My Shop URL: {body.shopUrl}</p> : null }
            </header>
            <section id="template-products">
                <Product/>
            </section>
            <section id="template-cart">
                <h1>Cart</h1>
                <div id="cart-items"></div>
                <div id="cart-total">
                    <p>Subtotal: <span></span></p>
                    <p>Total: <span></span></p>
                    <button id="checkout">Checkout</button>
                </div>
            </section>
            <section id="template-checkout" className="hidden">
                
            </section>
            <section id="template-contact">
                <h1>Have questions / concerns? Contact Us</h1>
                <form id="contact-form" onSubmit={ handleSubmit((data) => { }) }>
                    <input type="text" placeholder="Name" {...register('name', { required: true })} />
                    {errors.name && <span>Name is required</span>}
                    <input type="email" placeholder="Email" {...register('email', { required: true })} />
                    {errors.email && <span>Email is required</span>}
                    <textarea placeholder="Message" {...register('message', { required: true })}></textarea>
                    {errors.message && <span>Message is required</span>}
                    <button type="submit">Submit</button>    
                </form>
            </section>
        </div>
    );

}