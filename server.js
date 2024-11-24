const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Simulated ambulance location
let ambulanceLocation = { lat: 28.7041, lng: 77.1025 }; // New Delhi

// Endpoint to get ambulance location
app.get("/api/location", (req, res) => {
    res.json(ambulanceLocation);
});

// Endpoint to update ambulance location
app.post("/api/location", (req, res) => {
    const { lat, lng } = req.body;
    if (lat && lng) {
        ambulanceLocation = { lat, lng };
        res.status(200).json({ message: "Location updated", ambulanceLocation });
    } else {
        res.status(400).json({ message: "Invalid data" });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
