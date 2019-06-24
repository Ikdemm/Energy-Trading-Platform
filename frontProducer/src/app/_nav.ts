interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: "Marketplace",
    url: "/Marketplace",
    icon: "icon-basket"
  },
  {
    name: "Prediction",
    url: "/Prediction",
    icon: "icon-chart"
  },
  {
    title: true,
    name: "History"
  },
  {
    name: "Production",
    url: "/dashboard",
    icon: "icon-energy"
  },
  {
    title: true,
    name: "Manage"
  },
  {
    name: "Panels",
    url: "/Panels",
    icon: "icon-layers"
  }
];
