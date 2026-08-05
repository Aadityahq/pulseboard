require("dotenv").config();
const { createApp } = require("./app");
const { connectDB } = require("./config/db");

const PORT = process.env.PORT || 4000;

async function main() {
  await connectDB();
  console.log("Connected to MongoDB");

  const app = createApp();
  app.listen(PORT, () => {
    console.log(`PulseBoard API listening on port ${PORT}`);
  });
}

main().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
