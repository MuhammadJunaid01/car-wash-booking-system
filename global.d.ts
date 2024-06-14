declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PORT: string;
    DATABASE_URL: string;
    REFRESH_TOKEN_SECRET: string;
    ACCESS_TOKEN_SECRET: string;
    REFRESH_TOKEN_EXPIRES: string;
    ACCESS_TOKEN_EXPIRES: string;
    SALT_ROUNDS: string;
  }
}
