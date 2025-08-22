export type MenuItem = {
  label: string;
  href?: string;
  children?: MenuItem[]; // 하위 메뉴
};

export const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Intro",
    children: [
      { label: "이력서", href: "/intro/resume" },
      { label: "자소서", href: "/intro/cover-letter" },
    ],
  },
  {
    label: "Project",
    children: [
      { label: "TodoList", href: "/project/todo" },
      { label: "APIConnection", href: "/project/api-connection" },
      { label: "Grid", href: "/project/grid" },
    ],
  },
];
