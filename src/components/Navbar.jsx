import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { useRef } from 'react';

const Navbar = () => {
	const ref = useRef();

	const toggleCart = () => {
		ref.current.classList.toggle('translate-x-full');
	};

	return (
		<div className='flex flex-col md:flex-row md:justify-start justify-center items-center shadow-md'>
			<div className='logo mx-5'>
				<Link href={'/'}>
					<Image
						src={'/logo.webp'}
						alt={'logo'}
						width={200}
						height={40}
						priority
						style={{ width: 'auto', height: 'auto' }}
					/>
				</Link>
			</div>
			<div className='nav py-4'>
				<ul className='flex items-center space-x-2 font-bold md:text-xl'>
					<Link href={'/tshirt'}>
						<li>Tshirts </li>
					</Link>
					<Link href={'/hoodies'}>
						<li>Hoodies </li>
					</Link>
					<Link href={'/stickers'}>
						<li>Stickers </li>
					</Link>
					<Link href={'/mugs'}>
						<li>Mugs </li>
					</Link>
				</ul>
			</div>
			<div className='cart absolute right-0 mx-5 top-2 cursor-pointer' onClick={toggleCart}>
				<AiOutlineShoppingCart className='text-2xl md:text-3xl' />
			</div>
			<div
				className='w-72 h-full sideCart absolute top-0 right-0 bg-pink-100 p-10 transition-transform translate-x-full'
				ref={ref}>
				<h2 className='font-bold text-xl text-center'>Shoping Cart</h2>
				<span className='absolute top-2 right-2 cursor-pointer text-2xl text-pink-500' onClick={toggleCart}>
					<AiFillCloseCircle />
				</span>
				<ol>
					<li className='list-decimal font-semibold'>
						<div className='item flex my-4'>
							<div className='w-2/3'>Tshirts- Wear the code</div>
							<div className='w-1/3 flex justify-center items-center cursor-pointer text-pink-500'>
								<AiFillMinusCircle />
								<span className='mx-2'>1</span>
								<AiFillPlusCircle />
							</div>
						</div>
					</li>
					<li className='list-decimal font-semibold'>
						<div className='item flex my-4'>
							<div className='w-2/3'>Tshirts- Wear the code</div>
							<div className='w-1/3 flex justify-center items-center cursor-pointer text-pink-500'>
								<AiFillMinusCircle />
								<span className='mx-2'>1</span>
								<AiFillPlusCircle />
							</div>
						</div>
					</li>
					<li className='list-decimal font-semibold'>
						<div className='item flex my-4'>
							<div className='w-2/3'>Tshirts- Wear the code</div>
							<div className='w-1/3 flex justify-center items-center cursor-pointer text-pink-500'>
								<AiFillMinusCircle />
								<span className='mx-2'>1</span>
								<AiFillPlusCircle />
							</div>
						</div>
					</li>
					<li className='list-decimal font-semibold'>
						<div className='item flex my-4'>
							<div className='w-2/3'>Tshirts- Wear the code</div>
							<div className='w-1/3 flex justify-center items-center cursor-pointer text-pink-500'>
								<AiFillMinusCircle />
								<span className='mx-2'>1</span>
								<AiFillPlusCircle />
							</div>
						</div>
					</li>
					<li className='list-decimal font-semibold'>
						<div className='item flex my-4'>
							<div className='w-2/3'>Tshirts- Wear the code</div>
							<div className='w-1/3 flex justify-center items-center cursor-pointer text-pink-500'>
								<AiFillMinusCircle />
								<span className='mx-2'>1</span>
								<AiFillPlusCircle />
							</div>
						</div>
					</li>
				</ol>
				<div className='flex item-center'>
					<button className='flex mx-auto text-white bg-pink-500 border-0 p-2 focus:outline-none hover:bg-pink-600 rounded text-sm justify-center items-center'>
						<BsFillBagCheckFill className='mr-2' />
						Checkout
					</button>
					<button className='flex mx-auto text-white bg-pink-500 border-0 p-2 py-1 focus:outline-none hover:bg-pink-600 rounded text-sm justify-center items-center ml-4'>
						Clear Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
