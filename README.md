# **Serious Complaint Logger**
A Node.js-based integration that listens for serious complaints and sends email notifications when such complaints are made. The integration is deployed on Render and accessible at:

🔗 **Live URL:** [Serious Complaint Logger](https://serious-complaint-logger.onrender.com)

---
## **Features**
- ✅ API endpoint to log serious complaints
- ✅ Sends email notifications upon complaint submission
- ✅ Built with Node.js and Express
- ✅ Deployed on Render

---

## **Integration JSON**
```json
{
    "data": {
        "author": "Georgia Uzoamaka Nwachukwu",

        "date": {
            "created_at": "2025-02-21",
            "updated_at": "2025-02-21"
        },

        "descriptions": {
            "app_description": "An output integration app that sends an email to a specified email address whenever a serious complaint is detected in a message.",
            "app_logo": "https://iili.io/3962CI1.jpg",
            "app_name": "Serious Complaint Logger",
            "app_url": "https://serious-complaint-logger.onrender.com",
            "background_color": "#FFFFFF"
        },

        "integration_category": "Email & Messaging",

        "integration_type": "modifier",

        "is_active": true,

        "key_features": [
            "Receives messages from a Telex channel",
            "Detects serious complaints in messages using OpenAI's GPT-4 model",
            "Sends an email, containing the complaint, to a specified email address"
        ],
        "permissions": {
            "events": [
                "Receives messages from a Telex channel",
                "Detects serious complaints in messages using OpenAI's GPT-4 model",
                "Sends an email, containing the complaint, to a specified email address"
                ]
        },
        "settings": [
            {
                "label": "Email Address",
                "type": "text",
                "description": "The email address to receive serious complaint alerts",
                "default": "username@example.com",
                "required": true
            },
            {
                "label": "Alert Admin",
                "type": "multi-select",
                "description": "Select the user roles to alert",
                "required": true,
                "default": "Super-Admin, Admin"
            }
        ],
        "target_url": "https://serious-complaint-logger.onrender.com/webhook/complaint"
    }
}
```

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

### **Testing**
1. Add integration [JSON link]("https://serious-complaint-logger.onrender.com/integration-spec) to telex
2. Add email address to Settings, as a forwarding address.
3. Send messages to Telex channel for OpenAI to read and detect serious complaints

## **Technologies Used**
* Node.js – Backend runtime
* Express.js – Web framework
* Nodemailer – Email handling
* Render – Cloud hosting

## **Contributing**
Feel free to fork the repo and submit pull requests!

## **License**
This project is licensed under the MIT License.