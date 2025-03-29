import { camel, isArray, isObject } from "radash";

type CamelCase<S> = S extends `${infer First}_${infer SecondFirst}${infer Rest}`
  ? `${First}${Uppercase<SecondFirst>}${CamelCase<Rest>}`
  : S;

type KeysToCamelCase<T> =
  T extends Record<string, unknown>
    ? {
        [K in keyof T as CamelCase<K>]: KeysToCamelCase<T[K]>;
      }
    : T extends Array<infer U>
      ? Array<KeysToCamelCase<U>>
      : T;

const mapKeysToCamelCase = <TData extends Record<string, any>>(
  data: TData,
): KeysToCamelCase<TData> => {
  return Object.entries(data).reduce((acc, [key, value]) => {
    if (isArray(value)) {
      return {
        ...acc,
        [camel(key)]: value.map((element) => mapKeysToCamelCase(element)),
      };
    }

    if (isObject(value)) {
      return {
        ...acc,
        [camel(key)]: mapKeysToCamelCase(value),
      };
    }

    return {
      ...acc,
      [camel(key)]: value,
    };
  }, {}) as KeysToCamelCase<TData>;
};

export default mapKeysToCamelCase;
