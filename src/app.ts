import { Server } from "socket.io";
import { supabase } from "./config/supabaseClient.js";

const port = 3000
const io = new Server(port, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST']
    }   
});

io.on('connection', socket => {
    console.log(supabase)
    socket.on('get-document',documentId => {
        const data = ""
        socket.join(documentId)
        socket.emit('load-document', data);

        socket.on('send-changes',delta => {
            console.log(delta)
            socket.broadcast.to(documentId).emit('receive-changes',delta)
        })
    })
})
