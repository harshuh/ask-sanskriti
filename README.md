# Ask Sanskriti

PS ID : 1648

Ask Sanskriti is an online chatbot-based ticketing system designed for the Museums of India. This application provides users with an interactive and seamless experience for discovering museums and simulating the ticket booking process.

## Features

- **Interactive Chatbot Interface**: A user-friendly chatbot, "Ask Sanskriti," guides users through the available options.
- **Museum Search**: Dynamically search for museums across India from a MongoDB database.
- **Simulated Ticket Booking**: A full workflow to simulate booking tickets by selecting a museum, specifying the number of visitors, and providing contact details.
- **QR Code Generation**: Generates a placeholder QR code upon successful ticket "booking," mimicking a real-world ticketing system.
- **Admin Panel**: A dedicated interface (`/museum`) for administrators to easily add and manage museum information in the database.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Frontend**: EJS (Embedded JavaScript templates), HTML, CSS, JavaScript
- **Key Libraries**: `dotenv`, `cors`, `nanoid`, `qrcode`

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm
- A MongoDB database instance (local or a cloud service like MongoDB Atlas)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/harshuh/ask-sanskriti.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd ask-sanskriti
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

4.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add the following variables. Replace `YOUR_MONGODB_CONNECTION_STRING` with your actual MongoDB connection string.

    ```env
    PORT=2024
    mongo_url=YOUR_MONGODB_CONNECTION_STRING
    ```

5.  **Run the application:**
    For development with automatic reloading:
    ```sh
    npm run dev
    ```
    To run in production mode:
    ```sh
    npm start
    ```

6.  **Access the application:**
    Open your browser and navigate to `http://localhost:2024`.

## Usage

1.  **Homepage**: When you open the application, you'll be greeted by the "Ask Sanskriti" chatbot with several options.
2.  **Book a Ticket**: Click "Book a ticket" to start the process.
3.  **Search for a Museum**: An interactive search box will appear, allowing you to find a museum by name or city.
4.  **Provide Details**: Follow the chatbot's prompts to enter the number of visitors and a phone number.
5.  **Get Ticket**: Once all details are provided, the chatbot will confirm your booking and display a success message along with a QR code representing your ticket.
6.  **Admin Panel**: To add new museums to the database, navigate to `http://localhost:2024/museum` and submit the form with the required details.

1. Efficient Handling of High Volumes
2. Data Collection and Analysis
3. Multilingual Support
4. Enhanced Marketing and Promotion Expected
