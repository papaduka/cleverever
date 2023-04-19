import type { Handlers, PageProps } from "$fresh/server.ts";
import Head from "@/components/Head.tsx";
import type { CurriculumState } from "./_middleware.ts";
import Curriculum from "@/components/Curriculum.tsx";
import type { Database } from "@/utils/supabase_types.ts";

interface AccountPageData extends CurriculumState {
  customer: Database["public"]["Tables"]["customers"]["Row"];
}

export const handler: Handlers<AccountPageData, CurriculumState> = {
  async GET(_request, ctx) {
    const customer = await ctx.state.createOrGetCustomer();
    return ctx.render({ ...ctx.state, customer });
  },
};

export default function AccountPage(props: PageProps<AccountPageData>) {
  const action = props.data.customer.is_subscribed ? "Manage" : "Upgrade";

  return (
    <>
      <Head title="Account" />
      <Curriculum active="/curriculum/account">
        <ul class="space-y-2">
          <li class="flex items-center justify-between gap-2 py-2">
            <div class="flex-1">
              <strong>Email</strong>
            </div>
            <div>{props.data.session.user.email}</div>
          </li>
          <li class="flex items-center justify-between gap-2 py-2">
            <div class="flex-1">
              <strong>Subscription</strong>
            </div>
            <a
              class="underline"
              href={`/curriculum/${action.toLowerCase()}-subscription`}
            >
              {action} subscription
            </a>
          </li>
        </ul>
      </Curriculum>
    </>
  );
}
