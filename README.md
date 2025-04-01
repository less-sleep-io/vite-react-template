# Vite React Template

Vite React Template (VRT) is preconfigured to provide a Single Page Application (SPA) with:

- Routing
- Data handling
- Styling

It attempts to provide an optimal developer experience by following best practices and using the latest technologies and libraries.

## Routing

Routing is provided by [Tanstack Router](https://tanstack.com/router/latest).

While Tanstack Router supports both code-based and file-based routing, it is configured to use [file-based routing](https://tanstack.com/router/latest/docs/framework/react/routing/file-based-routing) by default as this is the recommended configuration and allows for automatic:

- [Code splitting](https://tanstack.com/router/latest/docs/framework/react/guide/code-splitting/#using-automatic-code-splitting)
- [Type safety](https://tanstack.com/router/latest/docs/framework/react/guide/type-safety#route-definitions)
- [Built-in Route Loaders](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading)
- [Route prefetching](https://tanstack.com/router/latest/docs/framework/react/guide/preloading)

and many more features.

### Data Fetching

Tanstack Router also provides [data fetching and caching](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading) capabilities out of the box, which can be used to fetch data for your routes.

VRT is preconfigured with [Axios](https://axios-http.com/), a promise based HTTP client that simplifies loading data.

It features:

- Intercept request and response
- Automatic request body serialization
- Transform request and response data
- Cancel requests
- Timeouts

and much more.

## Styling

Styling

Styling is provided by [Tailwind CSS](https://tailwindcss.com/).

### Helpers

Helper libraries are included to help with class merging and
conditional classes.

#### `cn` function

The `cn` function is a utility designed to simplify
className management in React and Tailwind. It ensures that class
names are merged correctly, resolves conflicts, and promotes
consistent, maintainable component styling.

It uses 2 libraries under the hood:

- [Tailwind Merge](https://github.com/dcastil/tailwind-merge)
- [Clsx](https://github.com/lukeed/clsx)

#### Class Variance Authority

The [Class Variance Authority](https://github.com/joe-bell/cva) library is used to create variants for components. It allows you to define different styles for different states of a component, making it easy to manage complex styling scenarios.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactDom from "eslint-plugin-react-dom";
import reactX from "eslint-plugin-react-x";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
