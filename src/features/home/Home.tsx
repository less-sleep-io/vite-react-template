import AppLink from "~/components/AppLink";

const Home = () => {
  return (
    <div className="flex min-h-full w-full flex-col items-center justify-center pb-20">
      <h1 className="mb-3 max-w-xl text-2xl text-neutral-300">
        Welcome to Vite React Starter
      </h1>
      <p className="mb-6 max-w-xl text-center text-base text-neutral-400">
        This is designed to be a comprehensive, opinionated, but flexible
        starter template for building React apps.
      </p>
      <ul className="flex gap-4">
        <li>
          <AppLink to="/weather">API Example</AppLink>
        </li>
      </ul>
    </div>
  );
};

export default Home;
