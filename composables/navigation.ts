interface INavigateItem {
  label: string;
  items: {
    label: string;
    to: string;
    icon: string;
    items?: INavigateItem[];
    separator?: boolean;
  }[];
  separator?: boolean;
}

export function useNavigationMenu() {
  const navigationMenu: INavigateItem[] = [
    {
      label: "Home",
      items: [
        {
          label: "Dashboard",
          to: "/",
          icon: "pi pi-fw pi-home",
        },
      ],
    },
    {
      label: "PrimeVue",
      items: [
        {
          label: "DataTable",
          icon: "pi pi-fw pi-table",
          to: "/prime/datatable",
        },
        {
          label: "Messages",
          icon: "pi pi-fw pi-user-edit",
          to: "/prime/messages",
        },
        {
          label: "Validation",
          icon: "pi pi-fw pi-user-edit",
          to: "/prime/validation",
        },
      ],
    },
    {
      label: "Content",
      items: [
        {
          label: "Markdown",
          icon: "pi pi-fw pi-user-edit",
          to: "/cms/markdown",
        },
        {
          label: "Component",
          icon: "pi pi-fw pi-user-edit",
          to: "/cms/component",
        },
      ],
    },
    {
      label: "Pages",
      items: [
        { label: "Stores", icon: "pi pi-fw pi-database", to: "/stores" },
        { label: "Server", icon: "pi pi-fw pi-database", to: "/server" },
        { label: "I18n", icon: "pi pi-fw pi-database", to: "/i18n" },
      ],
    },
    {
      label: "Templates",
      items: [
        {
          label: "Blueprint",
          icon: "pi pi-fw pi-user-edit",
          to: "/templates/blueprint",
        },
      ],
    },
  ];

  return { navigationMenu };
}
