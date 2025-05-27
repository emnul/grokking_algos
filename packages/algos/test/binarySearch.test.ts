import { expect, test } from 'vitest';
import { binarySearch } from "@grokking-algos/algos";

test('Expect to return null for empty array', () => {
  expect(binarySearch([], 1)).toBeNull();
})