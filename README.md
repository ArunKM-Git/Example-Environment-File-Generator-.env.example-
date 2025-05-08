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

1. Make sure you have a `.env` file in the same directory as this script.
2. Run the script using Node.js:

```bash
node generate.env.example.js
```

3. This will generate or overwrite a `.env.example` file in the same directory.

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
