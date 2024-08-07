# MobilUiTest

This project is an automated testing framework created using Cypress for mobile browsers. It is designed to test the mobile user experience on e-commerce sites.

## Project Overview

This project includes four main testing categories:

- **mobile-ui**: Mobile user interface tests. These tests check if the homepage functions correctly when viewed on a mobile device.
- **product-ui**: Product control tests. These tests verify the listing, visibility, and accuracy of product information.
- **add-to-cart**: Tests for adding products to the cart and verifying the correctness of the cart page. It also checks if products are successfully added to the cart.
- **create-account**: Tests for user account creation. This includes both successful and unsuccessful account creation scenarios.

## Test Case Examples

Each project contains a variety of test cases to ensure the reliability of functionalities. Examples include:
- Login functionality
- CRUD operations for products and user data
- Adding products to the cart
- Checkout processes

## Getting Started

### Requirements
- Node.js
- Cypress

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/batuhanngulec/MobileUiTest.git
    ```
2. Navigate to the project directory:
    ```bash
    cd MobileUiTest
    ```
3. Install the project dependencies:
    ```bash
    npm install
    ```

    If Cypress is not already listed in your `package.json`, add it by running:
    ```bash
    npm install cypress --save-dev
    ```

### Running the Tests
To run the Cypress tests, use the following command:
```bash
npx cypress open