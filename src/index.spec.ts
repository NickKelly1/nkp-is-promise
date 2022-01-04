import { andIsPromise, isPromise, isPromiseLike } from '.';

describe('isPromiseLike', () => {
  it('should work', () => {
    expect(isPromiseLike(new Promise<void>((res) => res()))).toBeTruthy();
    expect(isPromiseLike(Promise.resolve())).toBeTruthy();
    expect(isPromiseLike(Promise.reject().catch(() => {}))).toBeTruthy();
    expect(isPromiseLike(Promise.resolve())).toBeTruthy();
    expect(isPromiseLike({ then() {}, catch() {}, })).toBeTruthy();
    expect(isPromiseLike({ then: () => {}, catch: () => {}, })).toBeTruthy();
    expect(isPromiseLike({ then: () => {}, })).toBeTruthy();
    expect(isPromiseLike({ catch: () => {}, })).toBeFalsy();
  });
});

describe('andIsPromise', () => {
  it('should work', () => {
    let v: any = new Promise<void>((res) => res());
    expect(isPromise(v) && andIsPromise(v)).toBeTruthy();

    v = Promise.resolve();
    expect(isPromise(v) && andIsPromise(v)).toBeTruthy();

    v = Promise.reject().catch(() => {});
    expect(isPromise(v) && andIsPromise(v)).toBeTruthy();

    v = Promise.resolve();
    expect(isPromise(v) && andIsPromise(v)).toBeTruthy();

    v = { then() {}, catch() {}, };
    expect(isPromise(v) && andIsPromise(v)).toBeTruthy();

    v = { then: () => {}, catch: () => {}, };
    expect(isPromise(v) && andIsPromise(v)).toBeTruthy();

    v = { then: () => {}, };
    expect(isPromise(v) && andIsPromise(v)).toBeFalsy();

    v = { catch: () => {}, };
    expect(isPromise(v) && andIsPromise(v)).toBeFalsy();
  });
});

describe('isPromise', () => {
  it('should work', () => {
    expect(isPromise(new Promise<void>((res) => res()))).toBeTruthy();
    expect(isPromise(Promise.resolve())).toBeTruthy();
    expect(isPromise(Promise.reject().catch(() => {}))).toBeTruthy();
    expect(isPromise({ then() {}, catch() {}, })).toBeTruthy();
    expect(isPromise({ then: () => {}, catch: () => {}, })).toBeTruthy();
    expect(isPromise({ then: () => {}, })).toBeFalsy();
    expect(isPromise({ catch: () => {}, })).toBeFalsy();
  });
});