const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const { OpenAI } = require("openai");
const { integrationSpecSettings } = require("/integrationSpec");

dotenv.config();

const app = express();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/health", (req, res) => {
    res.json({
        status: "active",
    })
});

app.get("/integration-spec" , (req, res) => {
    res.json(integrationSpecSettings);
});

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    },
});

async function isSeriousComplaint(message) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: "You are a customer service assistant that classifies complaints according to their severity or urgency." },
                { role: "user", content: `Classify this complaint as "serious" or "not serious": "${message}"` }
            ],
            max_tokens: 5,
        });

        const classification = response.choices[0]?.message?.content.trim().toLowerCase();

        if (classification === "serious") {
            return true;
        } else if (classification === "not serious") {
            return false;
        } else {
            console.warn("Idk what classification this falls under:", classification);
            return false;
        }
    } catch (error) {
        console.error("There was an error classifying this message:", error);
        return false;
    }
}

app.post("/webhook/complaint", async (req, res) => {
    try {
        const { message, user } = req.body;

        if (!message || !user) {
            return res.status(400).json({
                success: false,
                error: "Invalid request: you skipped some required fields"
            });
        }

        const isSerious = await isSeriousComplaint(message);

        if (isSerious) {
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.TEST_EMAIL,
                subject: "Serious complaint Alert!",
                text: `A serious complaint has been logged by ${user}, here are more details: \n\n"${message}"`,
            };

            try{
                await transporter.sendMail(mailOptions);
                console.log(`Email sent for serious complaint: ${message}`);
            } catch (emailError) {
                console.error( "Error sending email:", emailError );
                return res.status(500).json({
                    success: false,
                    error: "Failed to send email"
                });
            }
        } else {
            console.log("Not a serious complaint, sorry:", message);
        }

        res.status(200).json({ 
            success: true,
            message: "Your complaint has been logged successfully, please be patient, our team will get back to you shortly!"
        });

    } catch (error) {
        console.error("Error handling complaint:", error);
        res.status(500).json({
            success: false,
            error: "Internal server error"});   
    }
});

app.listen(PORT, () => {
    console.log(`we are live on http://localhost:${PORT}`)
});
