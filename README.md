# Component Library

This project is a UI Component Library built using React and Storybook, designed to provide reusable components for web applications. The library includes buttons, labels, tables, and more, with a focus on responsive design and accessibility.

## Table of Contents
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [npm start](#npm-start)
- [npm test](#npm-test)
- [npm run build](#npm-run-build)
- [npm run eject](#npm-run-eject)
- [Docker Setup](#docker-setup)
- [Using Components](#using-components)
- [Storybook](#storybook)
- [Contributing](#contributing)
- [License](#license)
- [Learn More](#learn-more)

## Getting Started

### Prerequisites
Ensure you have Docker installed on your machine.

### Docker Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/hkaur213/kaur_harleen_coding_assignment_13
   cd kaur_harleen_coding_assignment13

2. **Build the Docker image**

    docker build -t kaur_harleen_coding_assignment13 .

3. **Run the Container**
    docker run -p 8018:80 --name kaur_harleen_coding_assignment13 kaur_harleen_coding_assignment13


4. **Access the Application**
    Open your browser and navigate to http://localhost:8018



# Storybook Setup

1. **Start Storybook**
    npm run storybook

2. **Access the Application**
    Open your browser and navigate to http://localhost:6006


# Testing
    To run the tests for the components:

1. **Run Tests**
     npm test

2. **Test Coverage**

You can check the coverage of your tests, which verifies the visibility and background color changes of your components when in a disabled state.


# Styling
    All components utilize StyledComponents for styling, ensuring they are responsive across different screen sizes. Each component is styled with default and disabled states to provide visual feedback.

# Pre-Commit Hooks with Husky
    This project includes pre-commit checks to ensure code quality before submitting changes. Husky is configured to run the following checks:

    Prettier: Ensures consistent code formatting.
    ESLint: Linting to identify and fix problems in your JavaScript code.
    Tests: Runs tests to ensure functionality.
    To set up Husky, run the following command after cloning the repository:
        npm install
        Husky will be installed and configured automatically.

# GitHub Actions
    This repository is integrated with GitHub Actions to ensure that all checks are run on every push or pull request. If any checks fail, you will be notified that the build failed.

License
(Include license information here, if applicable)

Learn More
(Include links to documentation or resources for further reading)

markdown
Copy code

### Key Changes Made:

1. **Updated Docker Commands**: Changed the port mapping to 8018 as required.
2. **Added Pre-Commit Hooks Section**: Included information about Husky and the pre-commit checks.
3. **Mentioned GitHub Actions**: Added a note about the integration with GitHub Actions for CI/CD.
4. **General Formatting**: Cleaned up the structure for clarity and ease of navigation.





