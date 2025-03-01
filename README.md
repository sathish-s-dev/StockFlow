
## **Project Documentation**

### **Project Overview**
- **Project Name**: `stockinc`
- **Version**: `0.0.0`
- **Type**: `module` (ES Modules)
- **Package Manager**: `pnpm@9.9.0`

---

### **Project Structure**
The project is structured as follows:
- **Source Code**: Located in the `src` directory.
- **Build Output**: Generated in the `dist` directory after running `pnpm build`.
- **Configuration Files**:
  - `vite.config.ts`: Vite configuration.
  - `tailwind.config.js`: Tailwind CSS configuration.
  - `tsconfig.json`: TypeScript configuration.
  - `eslint.config.js`: ESLint configuration.

---


### **Setup Instructions**

#### **1. Prerequisites**
- Ensure you have the following installed:
  - Node.js (v18 or higher)
  - pnpm (v9.9.0 or higher)

#### **2. Install Dependencies**
Run the following command to install all dependencies:
```bash
pnpm install
```

#### **3. Configure Environment Variables**
If your project uses environment variables, create a `.env` file in the root directory and add the necessary variables. For example:
```env
VITE_API_URL=https://api.example.com/
```

#### **4. Run the Development Server**
Start the development server using:
```bash
pnpm dev
```
This will start the Vite development server, and you can access the application at `http://localhost:5173`.

#### **5. Lint the Code**
To check for code issues, run:
```bash
pnpm lint
```

#### **6. Build for Production**
To build the project for production, run:
```bash
pnpm build
```
The production-ready files will be generated in the `dist` directory.

#### **7. Preview the Production Build**
To preview the production build locally, run:
```bash
pnpm preview
```
This will start a local server to serve the production build.

---

### **Deployment Instructions**

#### **1. Build the Project**
Ensure the project is built for production:
```bash
pnpm build
```

#### **2. Deploy to a Static Hosting Service**
You can deploy the `dist` directory to any static hosting service, such as:
- **Vercel**
- **Netlify**
- **GitHub Pages**
- **AWS S3**

##### **Deploying to Vercel**
1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy the project:
   ```bash
   vercel
   ```
3. Follow the prompts to complete the deployment.

##### **Deploying to Netlify**
1. Install the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
2. Deploy the project:
   ```bash
   netlify deploy --prod
   ```
3. Follow the prompts to complete the deployment.

##### **Deploying to GitHub Pages**
1. Install the `gh-pages` package:
   ```bash
   pnpm add -D gh-pages
   ```
2. Add the following scripts to `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy the project:
   ```bash
   pnpm deploy
   ```

#### **3. Configure CI/CD (Optional)**
Set up a CI/CD pipeline using GitHub Actions, GitLab CI, or another tool to automate testing and deployment.

---

### **Key Features**
- **Modern Build Tool**: Uses Vite for fast development and production builds.
- **Type Safety**: Leverages TypeScript for better developer experience and fewer runtime errors.
- **Responsive Styling**: Utilizes Tailwind CSS for utility-first styling.
- **Data Visualization**: Supports multiple charting libraries (ApexCharts, Recharts).
- **State Management**: Uses Redux Toolkit for efficient state management.
- **Routing**: Implements React Router for client-side routing.

---

### **Dependencies**
The project relies on the following dependencies:

#### **Core Libraries**
| Dependency               | Version   | Description                                                                 |
|--------------------------|-----------|-----------------------------------------------------------------------------|
| `react`                  | `^19.0.0` | A JavaScript library for building user interfaces.                          |
| `react-dom`              | `^19.0.0` | React's DOM rendering library.                                              |
| `react-router`           | `^7.2.0`  | A routing library for React applications.                                   |
| `react-redux`            | `^9.2.0`  | Official React bindings for Redux.                                          |
| `@reduxjs/toolkit`       | `^2.6.0`  | The official, opinionated Redux toolkit for efficient Redux development.    |
| `redux-persist`          | `^6.0.0`  | Persists and rehydrates Redux stores.                                       |

#### **UI and Visualization**
| Dependency               | Version   | Description                                                                 |
|--------------------------|-----------|-----------------------------------------------------------------------------|
| `apexcharts`             | `^4.5.0`  | A modern JavaScript charting library.                                       |
| `react-apexcharts`       | `^1.7.0`  | React wrapper for ApexCharts.                                               |
| `recharts`               | `^2.15.1` | A composable charting library built on React components.                    |
| `react-feather`          | `^2.0.10` | Feather icons as React components.                                          |

#### **Utilities**
| Dependency               | Version   | Description                                                                 |
|--------------------------|-----------|-----------------------------------------------------------------------------|
| `dayjs`                  | `^1.11.13`| A lightweight date library for parsing, manipulating, and formatting dates. |
| `motion`                 | `^12.4.5` | A library for animations and transitions.                                   |
| `react-helmet`           | `^6.1.0`  | A document head manager for React.                                          |
| `react-hot-toast`        | `^2.5.2`  | A lightweight toast notification library for React.                         |
| `clsx`                   | `^2.1.1`  | A utility for constructing `className` strings conditionally.               |
| `tailwind-merge`         | `^3.0.1`  | A utility to merge Tailwind CSS classes.                                    |

#### **Local Dependency**
| Dependency               | Version   | Description                                                                 |
|--------------------------|-----------|-----------------------------------------------------------------------------|
| `stockinc`               | `file:`   | A local dependency (likely the project itself or a local package).          |

---

### **Dev Dependencies**
The following development dependencies are used for building, linting, and type-checking the project:

| Dependency               | Version   | Description                                                                 |
|--------------------------|-----------|-----------------------------------------------------------------------------|
| `@types/react`           | `^19.0.10`| TypeScript definitions for React.                                           |
| `@types/react-dom`       | `^19.0.4` | TypeScript definitions for React DOM.                                       |
| `@types/react-helmet`    | `^6.1.11` | TypeScript definitions for React Helmet.                                    |
| `@types/node`            | `^22.13.4`| TypeScript definitions for Node.js.                                         |
| `@vitejs/plugin-react-swc`| `^3.5.0` | Vite plugin for React with SWC (Speedy Web Compiler).                       |
| `autoprefixer`           | `^10.4.20`| A PostCSS plugin to parse CSS and add vendor prefixes.                      |
| `eslint`                 | `^9.19.0` | A pluggable linting utility for JavaScript and TypeScript.                  |
| `@eslint/js`             | `^9.19.0` | ESLint's default rules and configurations.                                 |
| `eslint-plugin-react-hooks`| `^5.0.0` | ESLint rules for React hooks.                                              |
| `eslint-plugin-react-refresh`| `^0.4.18`| ESLint plugin for React Refresh.                                           |
| `globals`                | `^15.14.0`| Global variables for ESLint.                                               |
| `postcss`                | `^8.5.2`  | A tool for transforming CSS with JavaScript.                               |
| `tailwindcss`            | `3.4.2`   | A utility-first CSS framework for building custom designs.                  |
| `typescript`             | `~5.7.3`  | A typed superset of JavaScript that compiles to plain JavaScript.           |
| `typescript-eslint`      | `^8.22.0` | TypeScript support for ESLint.                                             |
| `vite`                   | `^6.1.0`  | A fast build tool for modern web applications.                              |

---


### **Future Improvements**
- Add unit and integration tests using tools like Jest and React Testing Library.
- Set up CI/CD pipelines for automated testing and deployment.
- Optimize the build process for better performance.
- Add documentation for components and utilities using tools like Storybook or Docz.

---

