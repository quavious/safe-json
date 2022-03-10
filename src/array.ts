import { Indexable } from './types';

const filterArray = <T extends Indexable>(
  array: T[],
  includes: string[] = [],
  excludes: string[] = [],
): T[] => {
  const filtered = array.filter((el) => {
    if (!el) {
      return false;
    }
    for (let i = 0; i < includes.length; i++) {
      if (el[includes[i]] === null || el[includes[i]] === undefined) {
        return false;
      }
    }
    for (let i = 0; i < excludes.length; i++) {
      if (el[excludes[i]]) {
        return false;
      }
    }
    return true;
  });
  return [...filtered];
};

const refineArray = <T extends Indexable, U extends Indexable>(
  array: T[],
  includes: string[],
  newIndexes: string[],
): U[] => {
  if (includes.length !== newIndexes.length) {
    console.error('error: the number of keys does not match.');
    return [];
  }
  const refined: U[] = [];

  for (let i = 0; i < array.length; i++) {
    let isOk = true;
    const obj: Indexable = {};
    for (let j = 0; j < includes.length; j++) {
      if (!array[i][includes[j]]) {
        isOk = false;
        break;
      }
      obj[newIndexes[j]] = array[i][includes[j]];
    }
    if (!isOk) {
      continue;
    } else {
      refined.push(obj as U);
    }
  }

  return [...refined];
};

export { filterArray, refineArray };
