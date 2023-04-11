
import express from 'express';
import { TodoRoute } from './src/routes/todo';
import mongoose, { Mongoose, connect } from 'mongoose';
// import * as bodyParser from 'body-parser'
// import { ConnectOptions } from 'mongoose';
// import { DB_HOST, DB_PORT, DB_DATABASE } from '@config';

class App {
    public app: express.Application;
    public env: string;
    public port: number;

    public constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.env = 'development';
        this.port = 3000;
        // TODO: create new function for adding routes
        console.log('aaaa');
        this.app.use('/todo', new TodoRoute().route);
        
        
        connect('mongodb://localhost:27017/vggateDb');
        console.log('bbbb');
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`running on port ${this.port}`);
        });
    }

}

export default App;



// export const dbConnection = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;

// export const dbConnection = {
//     url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
//     options: {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     },
//   };