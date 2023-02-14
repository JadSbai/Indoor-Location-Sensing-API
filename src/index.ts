import {connectToServer} from "./services/db.service";
import {app} from "./app";
import dotenv from 'dotenv'
dotenv.config();

const port = process.env.PORT || 3000;

connectToServer().then((connection) => {
    if(connection) {
        console.log("Connected to MongoDB");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
