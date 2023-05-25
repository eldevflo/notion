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
const mongodb_1 = require("mongodb");
const uri = 'mongodb+srv://Elena:fzmnpr@cluster0.naxjlk1.mongodb.net/?retryWrites=true&w=majority';
const client = new mongodb_1.MongoClient(uri);
const app = (0, express_1.default)();
const port = 8000;
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log('connected to database');
        }
        finally {
            // Ensures that the client will close when you finish/error
            yield client.close();
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
app.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, email } = req.body;
        yield client.connect();
        const database = client.db('Notion');
        const users = database.collection('users');
        const user = yield users.findOne({ email, password });
        if (user) {
            res.send(Object.assign(Object.assign({}, user), { id: user._id }));
        }
        else {
            res.send(null);
        }
    }
    finally {
        client.close();
    }
}));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    run();
});
