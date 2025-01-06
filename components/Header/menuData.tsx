import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About",
    newTab: false,
    path: "/#features",
  },
  {
    id: 3,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 30,
        title: "All Products",
        newTab: false,
        path: "/#",
      },
      {
        id: 31,
        title: "Rocker Switch",
        newTab: false,
        path: "/#",
      },
      {
        id: 32,
        title: "Fuse Box",
        newTab: false,
        path: "/#",
      },
      {
        id: 33,
        title: "Digital Voltmeter",
        newTab: false,
        path: "/#",
      },
      {
        id: 34,
        title: "Motorcycle Charger",
        newTab: false,
        path: "/#",
      },
      {
        id: 35,
        title: "Caravan Lock",
        newTab: false,
        path: "/#",
      },
      {
        id: 36,
        title: "EV Charger Plug",
        newTab: false,
        path: "/#",
      },
    ],
  },
  {
    id: 4,
    title: "News",
    newTab: false,
    path: "/docs",
  },
  {
    id: 5,
    title: "Support",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
