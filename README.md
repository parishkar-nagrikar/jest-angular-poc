# JestAnguler

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

**What is JEST?**

1. Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
2. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more
3.** zero config**
4. Jest aims to work out of the box, config free, on most JavaScript projects.
5. **snapshots**
6. Make tests which keep track of large objects with ease. Snapshots live either alongside your tests, or embedded inline.
7. **isolated**
8. Tests are parallelized by running them in their own processes to maximize performance.
9. **great api**
10. From it to expect - Jest has the entire toolkit in one place. Well documented, well maintained, well good.
11. **FAST AND SAFE**
12. By ensuring your tests have unique global state, Jest can reliably run tests in parallel. To make things quick, Jest runs previously failed tests first and re-organizes runs based on how long test files take.
13.** CODE COVERAGE**
14. Generate code coverage by adding the flag --coverage. No additional setup needed. Jest can collect code coverage information from entire projects, including untested files.
15.** EASY MOCKING**

17. Jest uses a custom resolver for imports in your tests, making it simple to mock any object outside of your test’s scope. You can use mocked imports with the rich Mock Functions API to spy on function calls with readable test syntax.
18. Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.
19. Jest is well-documented, requires little configuration and can be extended to match your requirements.
20. Jest makes testing delightful.

- Code Coverage	
- Easy Mocking 
- Great API 
- Exceptions	

**Steps to configure JEST in Angular Project : **

1. *Step 1*: Uninstall all karma jasmine packages 
2. *Step 2*: Remove test object from Angular.
3. *Step 3:* Delete karma.conf .js file and test.ts file
4. *Step 4*: npm i jest @types/jest jest -preset-angular
5. *Step 5*: Create setup.jest.ts file.
6. *Step 6*: Update tsconfig.spec.json file
7. *Step 7*: Add jest configuration in package.json 
8. *Step 8*: Add scripts in package.json to run JEST

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
