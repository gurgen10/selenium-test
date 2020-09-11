const winston = require('winston');
const { format } = require('winston');


const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: './logger/file-info.log',
      json: true,
      format: winston.format.combine(winston.format.timestamp(), winston.format.prettyPrint()) 
    }),
    new winston.transports.File({
      level: 'error',
      filename: './logger/file-error.log',
      json: true,
      format: winston.format.combine(winston.format.timestamp(), winston.format.json()) 
    }),
    new winston.transports.Http({
      level: 'warn',
      format: winston.format.json()
    }),
  ]
})

logger.exceptions.handle(new winston.transports.File({filename: './logger/exeption.log'}))

module.exports.logger = logger;

