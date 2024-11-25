# Personal Portfolio Website in React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Built using:

- Front-end library: React
- CSS framework: React-bootstrap
- CSS animations library: Animate.css
- Backend: Node.js with Express
- Email service: Nodemailer for sending emails

## Features

- **Contact Form**: Users can fill out a contact form, and the information will be sent to your email.
- **Newsletter Subscription**: Users can subscribe to a newsletter, and they will receive a confirmation email upon successful subscription.
- **Responsive Design**: The website is designed to be responsive and works well on various devices.

## Getting Started

In the `/personal-portfolio`, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

## Backend Setup

1. **Environment Variables**: Create a `.env` file in the root of your server directory and add the following variables:

   ```
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   ```

2. **MongoDB Connection**: If you are using MongoDB, ensure you have the connection string set up in your environment variables.

3. **Start the Server**: Navigate to the server directory and run:
   ```bash
   node server.js
   ```

## Important Notes

- Ensure that you have enabled "Less secure app access" in your Google account settings if you are using Gmail for Nodemailer. Alternatively, consider using an app password if you have 2-Step Verification enabled.
- Make sure to install all necessary dependencies by running:
  ```bash
  npm install
  ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the creators of [Create React App](https://github.com/facebook/create-react-app) for the initial setup.
- Special thanks to the libraries used in this project for their excellent documentation and support.
