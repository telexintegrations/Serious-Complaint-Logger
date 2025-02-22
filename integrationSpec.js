exports.integrationSpecSettings = {
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
            "app_url": "url",
            "background_color": "#FFFFFF",
        },

        "integration_category": "Email & Messaging",

        "integration_type": "Output",

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
        "settings": {
            "email_address": {
                "type": "Text",
                "label": "Email Address",
                "description": "The email address to receive serious complaint alerts",
                "default": "",
                "placeholder": "Enter the email address to receive serious complaint alerts",
                "required": true
            }
        },
        "target_url": "https://yourdomain.com/webhook/complaint"
    }
}

