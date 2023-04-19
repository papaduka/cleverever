import type { Handlers } from "$fresh/server.ts";
import { stripe } from "@/utils/stripe.ts";
import { CurriculumState } from "./_middleware.ts";

// deno-lint-ignore no-explicit-any
export const handler: Handlers<any, CurriculumState> = {
  async GET(request, ctx) {
    const customer = await ctx.state.createOrGetCustomer();
    const { url } = await stripe.billingPortal.sessions.create({
      customer: customer.stripe_customer_id,
      return_url: new URL(request.url).origin + "/curriculum",
    });

    return new Response(null, {
      headers: {
        location: url,
      },
      status: 302,
    });
  },
};
