import type { Handlers, PageProps } from "$fresh/server.ts";
import { getTodos } from "@/utils/todos.ts";
import Head from "@/components/Head.tsx";
import TodoList from "@/islands/TodoList.tsx";
import { CurriculumState } from "./_middleware.ts";
import Curriculum from "@/components/Curriculum.tsx";
import { Database } from "@/utils/supabase_types.ts";
import { BASE_NOTICE_STYLES } from "@/utils/constants.ts";

interface TodosPageData extends CurriculumState {
  todos: Database["public"]["Tables"]["todos"]["Insert"][];
  customer: Database["public"]["Tables"]["customers"]["Row"];
}

export const handler: Handlers<TodosPageData, CurriculumState> = {
  async GET(_request, ctx) {
    const customer = await ctx.state.createOrGetCustomer();
    const todos = await getTodos(ctx.state.supabaseClient);
    return ctx.render({
      ...ctx.state,
      todos,
      customer,
    });
  },
};

export default function TodosPage(props: PageProps<TodosPageData>) {
  return (
    <>
      <Head title="Todos" />
      <Curriculum active="/curriculum/todos">
        {!props.data.customer.is_subscribed && (
          <div class={BASE_NOTICE_STYLES}>
            You are on a free subscription. Please{" "}
            <a href="/curriculum/upgrade-subscription" class="underline">
              upgrade
            </a>{" "}
            to enable unlimited todos
          </div>
        )}
        <TodoList
          isSubscribed={props.data.customer.is_subscribed!}
          todos={props.data.todos}
        />
      </Curriculum>
    </>
  );
}
