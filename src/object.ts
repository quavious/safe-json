import { Indexable } from './types';

const accessObject = <T extends Indexable, U>(
  value: T,
  key: string,
): U | null => {
  const keys = Object.keys(value);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === key) {
      return value[key];
    }
  }
  return null;
};

const refineObject = <T extends Indexable, U extends Indexable>(
  value: T,
  newKeys: string[],
): U | null => {
  const keys = Object.keys(value);
  if (keys.length < newKeys.length) {
    console.error('error: the number of keys is invalid');
  }
  const obj: Indexable = {};
  for (let i = 0; i < keys.length; i++) {
    obj[newKeys[i]] = value[keys[i]];
  }
  return { ...obj } as U;
};

export { accessObject, refineObject };
