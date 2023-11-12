import { call } from "redux-saga/effects"

export const callTs = (func: any, ...args: unknown[]): any => {
    return call(func, ...args);
}