"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require('winston');
const { combine, timestamp, printf, colorize, align } = winston.format;
const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'debug',
    format: combine(colorize({ all: true }), timestamp({
        format: 'YYYY-MM-DD HH:mm:ss.SSS',
    }), printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)),
    transports: [
        new winston.transports.Console({ level: 'debug' }),
        new winston.transports.File({
            filename: './logs/logs.log',
            level: 'info',
        })
    ],
});
exports.default = logger;
