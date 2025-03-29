const DEPS = [
  {
    href: "https://tanstack.com/router/latest",
    text: "Tanstack Router",
  },
  {
    href: "https://tanstack.com/query/latest",
    text: "Tanstack Query",
  },
  {
    href: "https://tailwindcss.com/",
    text: "Tailwind CSS",
  },
  {
    children: [
      {
        href: "https://github.com/dcastil/tailwind-merge",
        text: "Tailwind Merge",
      },
      {
        href: "https://github.com/lukeed/clsx",
        text: "Clsx",
      },
      {
        href: "https://github.com/joe-bell/cva",
        text: "Class Variance Authority",
      },
    ],
    href: "https://askides.com/s/create-react-components-with-tailwind-like-a-pro",
    text: "Tailwind utils",
  },
];

const Overview = () => {
  return (
    <main className="">
      <h1>Overview</h1>
    </main>
  );
};

export default Overview;
