import { Server } from "socket.io";
import dotenv from "dotenv";
dotenv.config();
const port = 3000;
const io = new Server(port, {
    cors: {
        origin: 'https://localhost:5173',
        methods: ['GET', 'POST']
    }
});
io.on('connection', socket => { });
//# sourceMappingURL=app.js.map