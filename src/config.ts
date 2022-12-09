import dotenv from 'dotenv';

dotenv.config({});

class Config {
    public DATABATE_URL: string | undefined;
    public JWT_TOKEN: string | undefined;
    public NODE_ENV: string | undefined;
    public SECRET_KEY_ONE: string | undefined;
    public SECRET_KEY_TWO: string | undefined;
    public CLIENT_URL: string | undefined;
    public REDIS_HOST: string | undefined;

    private readonly DEFAULT_DATABASE_URL = 'mongodb://localhost:27017/project-cleven'

    constructor() {
       
        this.DATABATE_URL = process.env.DATABASE_URL || this.DEFAULT_DATABASE_URL;
        this.JWT_TOKEN = process.env.DATABASE_URL || '556933256';
        this.NODE_ENV = process.env.DATABASE_URL || '';
        this.SECRET_KEY_ONE = process.env.DATABASE_URL || '';
        this.SECRET_KEY_TWO = process.env.DATABASE_URL || '';
        this.CLIENT_URL = process.env.DATABASE_URL || ''
        this.REDIS_HOST = process.env.DATABASE_URL || ''
        

    }

    public validateConfig(): void {
        for(const [key, value] of Object.entries(this)) {
          if(value === undefined) {
            throw new Error(`Configuration ${key} is undefined`);
          }
        }
    }
};

export const config: Config = new Config();