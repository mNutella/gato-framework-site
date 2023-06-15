export type NavItem = {
  id: number;
  name: string;
  description: string;
  href: string;
  linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  order: number;
};

export type NavGroup = {
  id: number;
  title: string;
  items: NavItem[];
};
