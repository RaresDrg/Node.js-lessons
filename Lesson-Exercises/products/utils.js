const AVAILABLE_COMANDS_LIST = [
  {
    command: "--action list",
    description: "It returns the products list",
  },
  {
    command: "--action get --id",
    description: "It returns a product from the list, based on its id",
  },
  {
    command: "--action add --name --size --type ",
    description: "It allows you to add a product to the list",
  },
  {
    command: "--action remove --id",
    description:
      "It allows you to remove a product from the list, based on its id.",
  },
];

export default AVAILABLE_COMANDS_LIST;
