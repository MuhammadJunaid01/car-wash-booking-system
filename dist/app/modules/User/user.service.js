"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = require("../../errors/AppError");
const user_model_1 = __importDefault(require("./user.model"));
const createToken_1 = __importDefault(require("../../../lib/utils/createToken"));
const config_1 = __importDefault(require("../../config"));
const signUpUserIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExistUser = yield user_model_1.default.findOne({ email: payload.email });
    if (!isExistUser) {
        const createdNewUser = yield user_model_1.default.create(payload);
        const newUserObject = createdNewUser.toObject();
        // eslint-disable-next-line
        const { password } = newUserObject, rest = __rest(newUserObject, ["password"]);
        return rest;
    }
    throw new AppError_1.AppError(`this user already exist.`, http_status_1.default.CONFLICT);
});
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findOne({ email: payload.email });
    if (user) {
        const token = (0, createToken_1.default)({
            userId: user.id,
            role: user.role,
            secret: config_1.default.access_token_secret,
            expiresIn: config_1.default.expiresIn,
        });
        return {
            data: user,
            token: token,
        };
    }
    throw new AppError_1.AppError("user not found", http_status_1.default.NOT_FOUND);
});
exports.UserServices = {
    signUpUserIntoDB,
    loginUser,
};
