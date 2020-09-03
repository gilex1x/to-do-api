import { IMongoDBConfig, mongodb } from '../config'
import chalk from 'chalk'
import logger from './logger'
import dotenv from 'dotenv'

dotenv.config();

const port = process.env.SERVER_PORT

const mongoose = require('mongoose')

export class MongoDb implements IMongoDBConfig {
  auth: boolean = false
  dbHost: string = 'localhost'
  dbPort: number | string = 27017
  dbName: string = 'todo'
  dbUser?: string | null = null
  dbPassword?: string | null = null

  // tslint:disable-next-line: no-shadowed-variable
  constructor () {
    this.auth = mongodb.auth
    this.dbHost = mongodb.dbHost
    this.dbPort = mongodb.dbPort
    this.dbName = mongodb.dbName
    this.dbUser = encodeURIComponent(mongodb.dbUser) || null
    this.dbPassword = encodeURIComponent(mongodb.dbPassword) || null
  }

  public connect () {
    let MONGO_URI = `mongodb://${this.dbHost}:${this.dbPort}/${this.dbName}` // prettier-ignore

    let options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }

    if (this.auth) {
      MONGO_URI = `mongodb://${this.dbUser}:${this.dbPassword}@${this.dbHost}:${this.dbPort}/${this.dbName}`
    }

    logger.info(chalk.yellow(`MONGO: ${MONGO_URI}\n`))

    mongoose.connect(MONGO_URI, options).catch((err: any) => {
      console.log('error conectandose en mongo ', err);
      
    })

    mongoose.connection.on('error', () => {
      logger.error(chalk.red('MONGODB [ERROR]\n'))
      console.error.bind(console, 'MongoDB connection error:')
    })

    return mongoose
  }
}

export default new MongoDb()
