/* eslint-disable no-console */
import chalk from 'chalk';

export function log(msg) {
    console.log(msg);
}


export function styleWarn(msg) {
    return chalk.yellow(msg);
}

export function styleError(msg) {
    return chalk.red(msg);
}

export function warn(msg) {
    console.error(styleError(msg));
}

export function error(msg) {
    console.error(styleError(msg));
}

export function styleInfo(msg) {
    return chalk.white(msg);
}

export function info(msg) {
    console.log(styleInfo(msg));
}

export function json(obj) {
    info(JSON.stringify(obj, null, 4));
}


export function styleSuccess(msg) {
    return chalk.green(msg);
}

export function success(msg) {
    console.log(styleSuccess(msg));
}

/* eslint-disable no-console */
