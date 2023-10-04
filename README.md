# Node TypeScript Project Template

__Author:__<br>
Darby Ross<br>
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/darby-ross/)

This is a template for kickstarting your Node.js project with TypeScript. It comes pre-configured with essential tools such as `tsconfig.json`, `prettier`, `eslint`, and `jest` to help you maintain code quality and facilitate testing.

## Features

- Node.js project template with TypeScript support.
- Basic folder structure for organizing your project.
- Configuration files for TypeScript, Prettier, ESLint, and Jest.
- Ready-to-use setup for testing with Jest.
- Easily extendable and customizable.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.
- A text editor or integrated development environment (IDE) of your choice.

## Getting Started

To get started with this project template, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/rossd84/node-ts-template.git my-project
   ```

2. Change into the project directory:

   ```bash
   cd my-project
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

## Folder Structure

The project template provides a basic folder structure to help you get organized:

```
├───dist
├───logs
└───src
    ├───api
    ├───config
    ├───services
    └───tests
```
- `dist/`: The compiled JavaScript files will be generated here.
- `logs/`: This folder contains your logs.
- `src/`: This folder contains your TypeScript source code files.


```
└───api
    ├───components
    │   ├───auth
    │   └───user
    │       ├───services
    │       └───templates
    └───middleware
```
- `api/`: This folder contains the api components and middleware. It is where the server and routes files are kept as well.
- `components/`: This is where the components are kept. Each component contains the services, controllers, models, repos, routes, tests, etc. specific to that component.
- `middleware/`: This folder contains all middleware for the api.

## Scripts

In the project directory, you can run the following npm scripts:

- `build`: Compiles the TypeScript code in the `src/` directory to JavaScript in the `dist/` directory.
- `start`: Runs the TypeScript code in the `src/` directory using `ts-node`.
- `dev`: Runs the code using nodemon.
- `lint`: Runs ESLint to check your code for linting issues.
- `lint:fix`: Automatically fixes ESLint linting issues.
- `format`: Formats your code using Prettier.
- `test`: Runs Jest.

## Configuration Files

- `tsconfig.json`: TypeScript configuration file.
- `.prettierrc`: Prettier configuration file.
- `.eslintrc.js`: ESLint configuration file.
- `jest.config.js`: Jest configuration file.

## Customization

Feel free to customize this template to fit your project's specific needs. You can add more dependencies, change the folder structure, or modify the configuration files as required.

## License

This project template is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Happy coding!

