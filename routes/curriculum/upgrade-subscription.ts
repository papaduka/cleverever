import type { Handlers } from "$fresh/server.ts";
import { stripe } from "@/utils/stripe.ts";
import { CurriculumState } from "./_middleware.ts";
import { STRIPE_PREMIUM_PLAN_PRICE_ID } from "@/utils/constants.ts";

export const handler: Handlers<null, CurriculumState> = {
  async GET(request, ctx) {
    const customer = await ctx.state.createOrGetCustomer();
    const { url } = await stripe.checkout.sessions.create({
      success_url: new URL(request.url).origin + "/curriculum/todos",
      customer: customer.stripe_customer_id,
      line_items: [
        {
          price: STRIPE_PREMIUM_PLAN_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: "subscription",
    });

    return new Response(null, {
      headers: {
        location: url!,
      },
      status: 302,
    });
  },
};
