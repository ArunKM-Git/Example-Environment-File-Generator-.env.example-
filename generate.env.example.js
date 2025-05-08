//  Simply run this script to generate a .env.example file from the .env file.
//  The .env.example file will contain all the keys from the .env file with empty values.
//  This script is useful when you want to share your project with others and want them to know which environment variables are required.
//  The script reads the .env file, extracts the keys, and writes them to a new file called .env.example.
//  The script will overwrite the .env.example file if it already exists.
//  The script will generate a .env.example file in the same directory as the .env file.

//  To run the script, execute the following command:
//  node generate.env.example.js

const fs = require("fs");
const path = require("path");

// Path to the .env file
const envPath = path.resolve(__dirname, ".env");

// Read the .env file
fs.readFile(envPath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading .env file:", err);
        return;
    }

    // Split the file into lines and remove the values
    const envExample = data
        .split("\n")
        .map((line) => {
            if (line.trim() && !line.startsWith("#")) {
                const [key] = line.split("=");
                return `${key}=`;
            }
            return line;
        })
        .join("\n");

    // Write the .env.example file
    const envExamplePath = path.resolve(__dirname, ".env.example");
    fs.writeFile(envExamplePath, envExample, "utf8", (err) => {
        if (err) {
            console.error("Error writing .env.example file:", err);
            return;
        }
        console.log(".env.example file generated successfully!");
    });
});
