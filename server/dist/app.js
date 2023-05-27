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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dbConfig_1 = require("./config/dbConfig");
const constants_1 = require("./constants");
const user_1 = require("./routes/user");
const app = (0, express_1.default)();
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield dbConfig_1.client.connect();
            console.log('connected to database');
        }
        finally {
            // Ensures that the client will close when you finish/error
            yield dbConfig_1.client.close();
        }
    });
}
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
app.use((0, cors_1.default)());
//body purser
app.use(express_1.default.json({ limit: '10mb' }));
app.use(user_1.userRouter);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(constants_1.port, () => {
    console.log(`server listening on port ${constants_1.port}`);
});
