// items order is important for nav component, items in footer sorted by order property
export const NAV_ITEMS = [
  {
    id: 1,
    title: "Learn",
    items: [
      {
        id: 1,
        name: "Read Proposal",
        description:
          "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        href: "downloads",
        order: 1,
      },
      {
        id: 2,
        name: "Introduction",
        description:
          "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.", href: "/learn/introduction",
        order: 2,
      },
      {
        id: 3,
        name: "Literature",
        description:
          "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        href: "/learn/literature/heuristic-imperatives",
        order: 5,
      },
      {
        id: 4,
        name: "Getting Started",
        description:
          "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        href: "getting-started",
        order: 3,
      },
      {
        id: 5,
        name: "Learning Resources",
        description:
          "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        href: "#",
        order: 6,
      },
      {
        id: 6,
        name: "Traditions",
        description:
          "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        href: "traditions",
        order: 4,
      },
    ],
  },
  {
    id: 2,
    title: "Explore",
    items: [
      {
        id: 1,
        name: "Last News",
        description:
          "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        href: "#",
        order: 1,
      },
      {
        id: 2,
        name: "Showcases",
        description:
          "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        href: "showcases",
        order: 3,
      },
      // {
      //   id: 3,
      //   name: "Ecosystem",
      //   description:
      //     "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      //   href: "#",
      //   order: 2,
      // },
      {
        id: 4,
        name: "Blog",
        description:
          "Articles, news, and resources from across the GATO Ecosystem",
        href: "#",
        order: 4,
      },
    ],
  },
  {
    id: 3,
    title: "Join",
    items: [
      {
        id: 1,
        name: "Join",
        description:
          "Join a community of builders, developers, holders, and investors",
        href: "https://xkbfhb6exp8.typeform.com/to/cX4aaS4I?typeform-source=admin.typeform.com",
        linkProps: { target: "_blank"},
        order: 1,
      },
      // {
      //   id: 2,
      //   name: "Discords and more",
      //   description:
      //     "Join local and global groups on Discord, Telegram, Kakao and more.",
      //   href: "#",
      //   order: 2,
      // },
      {
        id: 3,
        name: "Working Groups",
        description:
          "Groups working on key workstreams in the GATOs Ecosystem",
        href: "#",
        order: 3,
      },
      // {
      //   id: 4,
      //   name: "Events",
      //   description:
      //     "Find community at upcoming conferences, virtual events, and more",
      //   href: "#",
      //   order: 4,
      // },
    ],
  },
];
