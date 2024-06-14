"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.join(process.cwd(), ".env"),
});
exports.default = {
    NODE_ENV: process.env.NODE_ENV,
    database_uri: process.env.DATABASE_URL,
    port: process.env.PORT,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    saltRounds: process.env.SALT_ROUNDS,
    expiresIn: process.env.ACCESS_TOKEN_EXPIRES,
};
