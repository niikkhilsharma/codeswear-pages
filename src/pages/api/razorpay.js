const Razorpay = require('razorpay');
const shortid = require('shortid');
import dbConnect from '@/middleware/mongoose';
import Product from '@/models/product';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		// Initialize razorpay object

		const razorpay = new Razorpay({
			key_id: process.env.RAZORPAY_KEY,
			key_secret: process.env.RAZORPAY_SECRET,
		});
		const productSlugs = Object.keys(req.body.cart);
		const cart = req.body.cart;
		console.log(cart);

		await dbConnect();
		let productTotal = 0;
		for (const slug of productSlugs) {
			const tempProduct = await Product.findOne({ slug });
			productTotal = productTotal + tempProduct.price * cart[slug].qty;
			// console.log(tempProduct.price);
			// console.log(cart[slug]);
		}
		const productsPrice = Product.find();
		// console.log(productTotal);

		// Create an order -> generate the OrderID -> Send it to the Front-end
		const payment_capture = 1;
		const amount = 1;
		const currency = 'INR';
		const options = {
			amount: (productTotal * 100).toString(),
			currency,
			receipt: shortid.generate(),
			payment_capture,
		};

		try {
			const response = await razorpay.orders.create(options);
			res.status(200).json({
				id: response.id,
				currency: response.currency,
				amount: response.amount,
			});
		} catch (err) {
			console.log(err);
			res.status(400).json(err);
		}
	} else {
		// Handle any other HTTP method
		res.status(405).json({ message: 'Method not allowed' });
	}
}
