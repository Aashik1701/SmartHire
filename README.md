# React + TypeScript + Vite
# SmartHire - React + TypeScript + Vite

This template provides a streamlined setup for building React applications with TypeScript, Vite, and ESLint. It leverages the power of Vite for fast development and optimized builds, TypeScript for type safety, and ESLint for code quality.

## Key Features

*   **React:** A popular JavaScript library for building user interfaces.
*   **TypeScript:** A superset of JavaScript that adds static typing, improving code maintainability and reducing errors.
*   **Vite:** A fast and lightweight build tool that significantly improves development speed with features like Hot Module Replacement (HMR).
*   **ESLint:** A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.  This project uses the [typescript-eslint](https://typescript-eslint.io/) suite of tools for linting TypeScript code.

## Included Plugins

This template comes pre-configured with the following Vite plugins:

*   **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md):** Uses [Babel](https://babeljs.io/) for Fast Refresh, enabling near-instant updates in the browser during development.
*   **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc):**  An alternative that uses [SWC](https://swc.rs/) for Fast Refresh, potentially offering even faster build times.  You can switch between these plugins in `vite.config.ts`.

## Getting Started

1.  **Clone the repository:**

  ```bash
  git clone <your_repository_url>
  cd <your_project_directory>
  ```

2.  **Install dependencies:**

  ```bash
  npm install  # or yarn install or pnpm install
  ```

3.  **Start the development server:**

  ```bash
  npm run dev  # or yarn dev or pnpm dev
  ```

  This will start the Vite development server with Hot Module Replacement (HMR). Open your browser to the address shown in the console (usually `http://localhost:5173/`).

## ESLint Configuration

This project includes a basic ESLint configuration to help maintain code quality.  It is configured to work with TypeScript.

### Expanding the ESLint Configuration (Recommended)

For production applications, it's highly recommended to enable type-aware linting rules for more comprehensive code analysis.  This can be done by modifying your `eslint.config.js` file.  The following example shows how to enable stricter, type-checked rules:

```js
// eslint.config.js
import tseslint from '@typescript-eslint/eslint-plugin';
import js from '@eslint/js';

export default tseslint.config({
  extends: [
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
  parserOptions: {
    project: ['./tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: import.meta.dirname,
  },
  },
})
```

**Explanation:**

*   `tseslint.configs.recommendedTypeChecked`:  Extends the recommended TypeScript ESLint rules and enables type checking.  This requires specifying `project` and `tsconfigRootDir` in `languageOptions`.
*   `tseslint.configs.stylisticTypeChecked`:  Adds stylistic rules with type checking.

### React-Specific Linting

For React-specific linting rules, you can install and configure the following plugins:

*   **[eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)**
*   **[eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)**

Example configuration:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'
import tseslint from '@typescript-eslint/eslint-plugin';
import js from '@eslint/js';

export default tseslint.config({
  extends: [
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ],
  plugins: {
  'react-x': reactX,
  'react-dom': reactDom,
  },
  rules: {
  ...reactX.configs['recommended-typescript'].rules,
  ...reactDom.configs.recommended.rules,
  },
  languageOptions: {
  parserOptions: {
    project: ['./tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: import.meta.dirname,
  },
  },
})
```

## Available Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Builds the application for production.
*   `npm run lint`: Runs ESLint to check for code quality issues.
*   `npm run preview`:  Locally previews the production build.

## Contributing

Contributions are welcome! Please feel free to submit pull requests.

## License

[MIT](LICENSE)
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
