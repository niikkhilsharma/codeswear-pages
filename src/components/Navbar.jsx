import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';

const Navbar = ({ addToCart, cart, removeFromCart, clearCart, subTotal }) => {
	const ref = useRef();
	const toggleCart = () => {
		ref.current.classList.toggle('translate-x-full');
	};

	return (
		<div className='flex flex-col md:flex-row md:justify-start justify-center items-center shadow-md sticky top-0 z-10 bg-white'>
			<div className='mx-5'>
				<Link href={'/'}>
					<Image
						src={'/logo.webp'}
						alt={'logo'}
						width={160}
						height={40}
						priority
						style={{ width: 'auto', height: 'auto' }}
					/>
				</Link>
			</div>
			<div className='nav py-4'>
				<ul className='flex items-center space-x-2 font-bold md:text-xl'>
					<Link className='hover:text-pink-600' href={'/tshirt'}>
						<li>Tshirts </li>
					</Link>
					<Link className='hover:text-pink-600' href={'/hoodies'}>
						<li>Hoodies </li>
					</Link>
					<Link className='hover:text-pink-600' href={'/stickers'}>
						<li>Stickers </li>
					</Link>
					<Link className='hover:text-pink-600' href={'/mugs'}>
						<li>Mugs </li>
					</Link>
				</ul>
			</div>
			<div className='cart absolute right-0 mx-5 top-2 cursor-pointer flex justify-center items-center'>
				<Link href={'/login'}>
					<MdAccountCircle className='text-2xl md:text-3xl mx-2' />
				</Link>
				<AiOutlineShoppingCart className='text-2xl md:text-3xl' onClick={toggleCart} />
			</div>
			<div
				className='w-72 sideCart absolute top-0 right-0 bg-white p-10 transition-transform translate-x-full z-20 h-[100vh]'
				ref={ref}>
				<h2 className='font-bold text-xl text-center'>Shoping Cart</h2>
				<span className='absolute top-2 right-2 cursor-pointer text-2xl text-pink-500' onClick={toggleCart}>
					<AiFillCloseCircle />
				</span>
				<ol>
					{Object.keys(cart).length === 0 && (
						<div className='text-xl text-center border-solid border-4 border-red-300 rounded-full shadow-2xl font-bold my-4'>
							Your cart is empty
						</div>
					)}
					{Object.keys(cart).map((id, lenth) => (
						<li className='list-decimal font-semibold' key={id}>
							<div className='item flex my-4'>
								<div className='w-2/3'>
									{cart[id].name}({cart[id].size}/{cart[id].varient})
								</div>
								<div className='w-1/3 flex justify-center items-center cursor-pointer text-pink-500'>
									<AiFillMinusCircle
										onClick={() => {
											removeFromCart(id, cart[id].qty, cart[id].price, cart[id].name, cart[id].size, cart[id].varient);
										}}
									/>
									<span className='mx-2'>{cart[id].qty}</span>
									<AiFillPlusCircle
										onClick={() => {
											addToCart(id, 1, cart[id].price, cart[id].name, cart[id].size, cart[id].varient);
										}}
									/>
								</div>
							</div>
						</li>
					))}
				</ol>
				<div className='font-bold my-4'>Subtotal: ₹{subTotal}</div>
				<div className='flex item-center'>
					<Link href={'/checkout'}>
						<button className='flex mx-auto text-white bg-pink-500 border-0 p-2 focus:outline-none hover:bg-pink-600 rounded text-sm justify-center items-center'>
							<BsFillBagCheckFill className='mr-2' />
							Checkout
						</button>
					</Link>
					<button
						onClick={clearCart}
						className='flex mx-auto text-white bg-pink-500 border-0 p-2 py-1 focus:outline-none hover:bg-pink-600 rounded text-sm justify-center items-center ml-4'>
						Clear Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
