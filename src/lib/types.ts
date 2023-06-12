export type NavItem = {
  id: number;
  name: string;
  description: string;
  href: string;
};

export type NavGroup = {
  id: number;
  title: string;
  items: NavItem[];
};


