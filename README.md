# Invoice Creation and Sharing Platform

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Interacting with the Smart Contract](#interacting-with-the-smart-contract)
- [Components](#components)
- [Best Practices](#best-practices)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

This frontend application interacts with an Invoicing Smart Contract deployed on the Stacks blockchain. It provides an interface for creating and managing invoices, with real-time feedback on blockchain transactions. This frontend is a separate project from the smart contract, which was developed by another party.

## Features

- Authentication with StacksJS
- Connecting to the Invoicing Smart Contract
- Add, edit, and delete services or products within an invoice
- Create invoices based on the prepared template
- Display a loader during transaction processing
- Show success notification upon successful invoice creation
- Real-time calculation of invoice totals

## Technologies Used

- ReactJS, tailwindcss
- ContextAPI
- Stacks.js for blockchain interactions

## Getting Started

### Prerequisites

- Node.js (version 18.20.2 or higher)
- npm or yarn
- A Stacks wallet (e.g., Hiro Wallet, Leather, Xverse) connected to the appropriate network

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/orisabiyi/luna.git
   ```
2. Navigate to the project directory:
   ```
   cd luna
   ```
3. Install dependencies:
   ```
   pnpm install
   ```

## Usage

1. Start the development server:
   ```
   pnpm dev
   ```
   or
   ```
   pnpm run dev
   ```
2. Open your browser and navigate to `http://localhost:5173`

## Interacting with the Smart Contract

### Creating an Invoice

1. Connect your Stacks wallet to the application.
2. Navigate to the invoice creation page.
3. Add line items (products or services) to your invoice:
   - Click "Add Item" to add a new line
   - Fill in details like description, and price
   - Click on description or price to edit or modify an item
     -Use the delete button to remove items from the list
4. The total amount is calculated automatically as you add or modify items.
5. Click "Generate Invoice" to create the invoice on the blockchain.
6. A loader will appear, indicating that the transaction is being processed.
7. Once the transaction is confirmed on the blockchain, a success notification will be displayed.

## Best Practices

1. **Real-time Feedback**: The application shows a loader during transaction processing, providing users with immediate feedback on the status of their action.
2. **Dynamic Invoice Creation**: Users can create detailed invoices by adding, editing, or removing line items before finalizing the invoice.
3. **Blockchain Confirmation**: The application waits for transaction confirmation on the blockchain before considering an operation complete, ensuring data integrity.

# Stacks Challenge Frontend - Enhanced Invoice Creation

[Previous sections remain unchanged]

## Deployment

This project is deployed on Vercel. To deploy your own instance:

1. Fork this repository to your GitHub account.
2. Sign up for a Vercel account if you haven't already.
3. In Vercel, click "New Project" and select your forked repository.
4. Configure the project settings:
   - Framework Preset: Vite
   - Build Command: `pnpm run build`
   - Output Directory: `build`
5. Click "Deploy"

**Note:** Vercel will automatically deploy new versions when you push changes to your repository.

## Contributing

Contributions to improve the application are welcome. Here's how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

### Reporting Bugs

If you find a bug, please open an issue with a clear description and steps to reproduce it. Include any relevant information like browser version, OS, etc.

### Suggesting Enhancements

For feature suggestions, open an issue with the tag "enhancement". Describe the feature you'd like to see, why you need it, and how it should work.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
