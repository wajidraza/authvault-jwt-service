// Configuration module for AuthVault JWT Authentication Service
export const config = {
  appName: "AuthVault JWT Authentication Service",
  port: parseInt(process.env.PORT || "8080", 10),
  dbUrl: process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/authvault_jwt_service_db",
  redisUrl: process.env.REDIS_URL || "redis://localhost:6379/0",
  isProduction: process.env.NODE_ENV === "production"
};
