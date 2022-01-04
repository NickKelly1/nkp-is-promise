/**
 * Does the unknown value conform to the Promise interface?
 *
 * @param value the value
 * @returns     whether the value is promise-like
 */
export function isPromise<T>(value: PromiseLike<T> | unknown): value is Promise<T> {
  // must have `then`
  if (!isPromiseLike(value)) return false;
  // must have `catch`
  if (!andIsPromise(value)) return false;
  // success
  return true;
}

/**
 * Does the unknown value conform to the PromiseLike interface?
 *
 * @param value the value
 * @returns     whether the value is promise-like
 */
export function isPromiseLike<T>(value: PromiseLike<T> | unknown): value is PromiseLike<T> {
  // must be defined
  if (!value) return false;
  // must be object
  if (typeof value !== 'object') return false;
  // must have `then` function
  if (typeof (value as any).then !== 'function') return false;
  // success
  return true;
}

/**
 * Does the PromiseLike value conform to the Promise interface?
 *
 * @param value the PromiseLike value
 * @returns     whether the value is a Promise
 */
export function andIsPromise<T>(like: PromiseLike<T>): like is Promise<T> {
  // must have `catch` function
  if (typeof (like as any).catch !== 'function') return false;
  // success
  return true;
}
