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
            "app_name": "Serious Complaint Analyzer",
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

