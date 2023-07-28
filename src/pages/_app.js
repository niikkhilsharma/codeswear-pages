import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
	const [cart, setCart] = useState({});
	const [subTotal, setSubTotal] = useState(0);

	const saveCart = newCart => {
		localStorage.setItem('cart', JSON.stringify(newCart));
		console.log(subTotal);

		let subt = 0;
		console.log('cart', cart);

		const keys = Object.keys(newCart);
		console.log('keys length', keys.length);
		for (let i = 0; keys.length > i; i++) {
			subt += newCart[keys[i]].price * newCart[keys[i]].qty;
		}
		console.log('subt', subt);
		setSubTotal(subt);
		localStorage.setItem('subTotal', JSON.stringify(subt));
	};
	const clearCart = cart => {
		setCart({});
		localStorage.removeItem('cart');
		setSubTotal(0);
		localStorage.removeItem('subTotal');
		console.log('Your cart has been cleared');
	};

	const addToCart = (itemCode, qty, price, name, size, varient) => {
		let newCart = cart;
		if (itemCode in cart) {
			newCart[itemCode].qty += 1;
		} else {
			newCart[itemCode] = { qty: 1, price, name, size, varient };
		}
		setCart(newCart);
		saveCart(newCart);
	};
	const removeFromCart = (itemCode, qty, price, name, size, varient) => {
		let newCart = cart;
		console.log(newCart[itemCode]);
		if (itemCode in cart) {
			newCart[itemCode].qty -= 1;
		}
		if (newCart[itemCode].qty <= 0) {
			delete newCart[itemCode];
		}
		setCart(newCart);
		saveCart(newCart);
	};

	useEffect(() => {
		try {
			if (localStorage.getItem('cart')) {
				setCart(JSON.parse(localStorage.getItem('cart')));
			}
			if (localStorage.getItem('subTotal')) {
				setSubTotal(JSON.parse(localStorage.getItem('subTotal')));
			} else {
				console.log('not found');
			}
		} catch (error) {
			console.error(`The error is  ${error}`);
			localStorage.clear();
		}
	}, []);

	return (
		<>
			<Navbar
				cart={cart}
				addToCart={addToCart}
				removeFromCart={removeFromCart}
				clearCart={clearCart}
				subTotal={subTotal}
			/>
			<Component
				cart={cart}
				addToCart={addToCart}
				removeFromCart={removeFromCart}
				clearCart={clearCart}
				subTotal={subTotal}
				{...pageProps}
			/>
			<Footer />
		</>
	);
}
