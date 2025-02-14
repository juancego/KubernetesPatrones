const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgresql://postgres:TyHezDuzvqAHGPQQpGsQRrIqUdWSFQJU@autorack.proxy.rlwy.net:55756/railway",
  ssl: { rejectUnauthorized: false } // Railway requiere SSL
});

module.exports = pool;
