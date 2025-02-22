# **Serious Complaint Logger**
A Node.js-based integration that listens for serious complaints and sends email notifications when such complaints are made. The integration is deployed on Render and accessible at:

🔗 **Live URL:** [Serious Complaint Logger](https://serious-complaint-logger.onrender.com)

---
## Features
✅ API endpoint to log serious complaints
✅ Sends email notifications upon complaint submission
✅ Built with Node.js and Express
✅ Deployed on Render

---

## **Getting Started**

### **Prerequisites**
Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A Render account (for deployment)

### **Installation**
Clone the repository and install dependencies:
```bash
git clone <https://github.com/telexintegrations/>
cd serious-complaint-logger
npm install
```

### **Configuration**
Create a .env file in the project root and add your environment variables:
```
PORT=3000
EMAIL_SERVICE=<your-email-service>
EMAIL_USER=<your-email-address>
EMAIL_PASS=<your-email-password>
```

### **Running the Application Locally**
Start the server:
```sh
npm start
```
The app should now be running on http://localhost:3000.

## **API Endpoints**
1. Log a Serious Complaint
Endpoint:

```bash
POST /complaints
```
Request Body (JSON):

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "message": "This is a serious complaint."
}
```
Response:

```json
{
  "status": "success",
  "message": "Complaint logged and email sent."
}
```
## **Deployment**
To deploy on Render:

1. Push your code to GitHub.
2. Connect the repo to Render and select Node.js as the environment.
3. Set up environment variables in Render’s Environment Settings.
4. Deploy and get your live URL.

## **Technologies Used**
* Node.js – Backend runtime
* Express.js – Web framework
* Nodemailer – Email handling
* Render – Cloud hosting

## **Contributing**
Feel free to fork the repo and submit pull requests!

## **License**
This project is licensed under the MIT License.