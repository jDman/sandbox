// readonly sort
export function readonlySort<T>(arrayToSort: ReadonlyArray<T>, sortMethod: (a: T, b: T) => number) {
  return arrayToSort.slice().sort(sortMethod);
}

export function insertionSort(array: Array<number>): Array<number> {
  for(let index = 1; index < array.length; index++) {
    const current = array[index];
    let j = index - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = current;
  }

  return array;
}

export function quickSort(array: Array<number>): Array<number> {
  let sortedArray = array.slice();
  partition(sortedArray, 0, sortedArray.length);
  return sortedArray;
}

function partition(array: Array<number>, start, before): void {
  const length = before - start;

  if (length <= 1) {
    return;
  }

  const pivotIndex = start + Math.floor(Math.random() * length);

  [array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];

  const pivot = array[start];

  let pivotRank = start;

  for(let index = start + 1; index < before; index++) {
    if (array[index] < pivot) {
      pivotRank++;
      [array[index], array[pivotRank]] = [array[pivotRank], array[index]];
    }
  }

  if (pivotRank !== start) {
    [array[pivotRank], array[start]] = [array[start], array[pivotRank]];
  }

  partition(array, start, pivotRank);
  partition(array, pivotRank + 1, before);
}

export function mergeSort(array: Array<number>): Array<number> {
  if (array.length <= 1) {
    return array;
  }
  const divisor = 2;

  const middle = Math.floor(array.length / divisor);

  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: Array<number>, right: Array<number>): Array<number> {
  const array: Array<number> = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex + rightIndex < left.length + right.length) {
    const leftItem = left[leftIndex];
    const rightItem = right[rightIndex];

    if (leftItem === null || leftItem === undefined) {
      array.push(rightItem);
      rightIndex++;
    } else if (rightItem === null || rightItem === undefined) {
      array.push(leftItem);
      leftIndex++;
    } else if (leftItem < rightItem) {
      array.push(leftItem);
      leftIndex++;
    } else {
      array.push(rightItem);
      rightIndex++;
    }
  }

  return array;
}