import express, { application, Express } from 'express'; 

import { FiveServer } from './setupServer';

class Application {
    public initialize(): void {
        const app: Express = express();
        const server: FiveServer = new FiveServer(app);
        server.start();
    }
}

const application: Application = new Application();
application.initialize();