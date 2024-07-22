const product = require('../../product/controllers/product');

const stripe = require('stripe')(process.env.STRIPE_KEY);

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    async create(ctx) {
        const { products } = ctx.request.body;

        const lineItem = await Promise.all(
            products.map( async (product) => {
                const item = await strapi
                .service("api::product.product")
                .findOne(product.id);

                return {
                    price_data: {
                        currency: "gbp",
                        product_data: {
                          name: item.title,
                        },
                        unit_amount: Math.round(item.price * 100),
                    },
                    quantity: product.quantity,
                }
            })
        )
        
        try {
            const session = await stripe.checkout.sessions.create({
            mode: "payment",
            success_url: process.env.CLIENT_URL+"?success=true",
            cancel_url: process.env.CLIENT_URL+"?success=false",
            line_items: lineItem,
            shipping_address_collection:{allowed_countries: ['GB']},
            payment_method_types: ["card"],
            })

            await strapi
                .service("api::order.order")
                .create({ data: { products, stripeId: session.id } 
            });

            return{
                stripeSession: session
            };


        } catch (err) {

            ctx.response.status = 500;
            ctx.send({ error: err.message });
        }
    }
}));
