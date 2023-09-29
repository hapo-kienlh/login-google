const express = require('express');
const router = express.Router();
const stripe = require("stripe")('sk_test_51NdOgIDkji30I4cEtmxBREdxC2rB32VCSPnSu6SyeuRbRWgAuLxzePBxcJJ9TJxprZpJE3Py7yB17S5Lh64Xcb1H00xFaP3yqg')


router.post('/', async (req, res, next) => {
	const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		mode: "payment",
		line_items: req.body.items.map(item => {
			return {
				price_data: {
					currency: "USD",
					product_data: {
						name: item.name,
					},
					unit_amount: item.price,
				},
				quantity: item.quantity,
			}
		}),
		success_url: 'http://localhost:3000/',
		cancel_url: 'http://localhost:3000/',
	})
	res.json({ url: session.url, sessionId: session.id })
});

module.exports = router;
