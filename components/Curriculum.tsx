import { type ComponentChild, JSX } from "preact";
import IconListDetails from "tabler-icons/list-details.tsx";
import IconUser from "tabler-icons/user.tsx";
import Header from "@/components/Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "@/components/Footer.tsx";

interface SidebarNavItem {
  icon: typeof IconUser;
  href: string;
  inner: ComponentChild;
}

interface SidebarNavProps extends JSX.HTMLAttributes<HTMLElement> {
  active?: string;
  items: SidebarNavItem[];
}

function SidebarNav(props: SidebarNavProps) {
  return (
    <nav class="w-full md:w-[16rem] md:flex-shrink-0 ">
      <ul class="flex flex-col justify-start">
        {props.items.map((item) => (
          <li>
            <a
              class={`px-4 py-2 rounded w-full block ${
                item.href === props.active
                  ? "bg-gray-100 font-bold"
                  : "hover:bg-gray-100"
              }`}
              href={item.href}
            >
              <span class="align-middle">
                <item.icon class="inline-block mr-2" />
                {item.inner}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

interface CurriculumProps {
  active: string;
  children: ComponentChild;
}

export default function CurriculumLayout(props: CurriculumProps) {
  const headerNavItems = [
    {
      href: "/logout",
      inner: "Logout",
    },
  ];

  const sidebarNavItems = [
    {
      icon: IconListDetails,
      href: "/curriculum/todos",
      inner: "Todos",
    },
    {
      icon: IconUser,
      href: "/curriculum/account",
      inner: "Account",
    },
  ];

  const footerNavItems = [
    {
      href: "https://fresh.deno.dev",
      inner: (
        <img
          width="197"
          height="37"
          src="https://fresh.deno.dev/fresh-badge.svg"
          alt="Made with Fresh"
        />
      ),
    },
  ];

  return (
    <div class="flex flex-col min-h-screen">
      <Header>
        <Nav items={headerNavItems} />
      </Header>

      <div class="p-8 mx-auto max-w-7xl flex-1 flex md:flex-row flex-col w-full gap-8">
        <SidebarNav
          {...props}
          items={sidebarNavItems}
        />
        <div class="flex-1">
          {props.children}
        </div>
      </div>
      <Footer>
        <Nav items={footerNavItems} />
      </Footer>
    </div>
  );
}
