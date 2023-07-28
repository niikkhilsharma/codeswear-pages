import Image from 'next/image';
import Link from 'next/link';

const Forgot = () => {
	return (
		<div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<Image className='mx-auto h-10 w-auto' src='/tshirt.png' alt='logo' width={100} height={140} />
				<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Forgot Password</h2>
			</div>
			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<form className='space-y-6' action='#' method='POST'>
					<div>
						<label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
							Email address
						</label>
						<div className='mt-2'>
							<input
								id='email'
								name='email'
								type='email'
								autoComplete='email'
								required=''
								className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div>
						<button
							type='submit'
							className='flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600'>
							Continue
						</button>
					</div>
				</form>
				<p className='mt-5 text-center text-sm text-gray-500'>
					or
					<Link href='/login' className='font-semibold leading-6 text-pink-600 hover:text-pink-500'>
						&nbsp;Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Forgot;
