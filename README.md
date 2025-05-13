# Example-Environment-File-Generator-.env.example-

A simple Node.js script that creates a .env.example file from your existing .env file. It extracts all keys and replaces the values with empty strings—perfect for sharing required environment variables with collaborators.

# generate-env-example

A simple Node.js script to generate a `.env.example` file from your existing `.env` file.

## 🚀 What It Does

This script helps you safely share your project's required environment variables by:

- Reading the `.env` file
- Extracting all keys
- Removing sensitive values
- Writing them into a `.env.example` file

It preserves comments and blank lines, making it easy for others to know which environment variables are needed.

## 🛠 Usage

### 🧱 1. Prerequisite

Make sure you have a `.env` file in the same directory as the script.

### 🧪 2. Choose Your Version

#### ➤ Option A: **ES Module** version (`generate.env.example.mjs`)

1. Use this version if your project is set up with **ES Modules** (e.g., `"type": "module"` in `package.json`).

2. Run the script with:

```bash
node generate.env.example.mjs
```

#### ➤ Option B: **CommonJS** version (`generate.env.example.js`)

1. Use this version if your project uses **CommonJS** (the default in most Node.js projects).

2. Run the script with:

```bash
node generate.env.example.js
```

### This will generate or overwrite a `.env.example` file in the same directory.

## 📂 Example

### `.env`

```env
API_KEY=1234567890abcdef
DB_USER=admin
DB_PASS=supersecret
```

### `.env.example`

```env
API_KEY=
DB_USER=
DB_PASS=
```

## 📎 Notes

- Comments (lines starting with `#`) and blank lines are preserved.
- Values are removed, but keys are kept.
- Useful for public repositories and collaborative projects.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
