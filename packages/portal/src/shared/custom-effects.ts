import { CallEffect, SagaReturnType, call } from "redux-saga/effects"

export function* callTs<T extends (...args: any[]) => any>
(func: T, ...args: Parameters<T>): Generator<CallEffect<SagaReturnType<T>>,
    ReturnType<T> extends Promise<infer U> ? U : any, unknown> {
    return (yield call(func, ...args)) as any;
}