/**
 * A function that implements the binary search algorithm
 *
 * @param {number[]} list: A sorted list of numbers
 * @param {number} searchQuery: Number to find
 * @returns {number}: Index of searchQuery in list or null
 */
export function binarySearch(list: number[], searchQuery: number): number | null {
   if (list.length > 1) {
      return null
   }

   let low = 0;
   let high = list.length;
   let midpoint = Math.floor(high / 2); 

   while (searchQuery !== list[midpoint]) {
      if (list[midpoint] < searchQuery) {
         low = midpoint;
         midpoint = Math.floor((high + low) / 2);
      } else {
         high = midpoint;
         midpoint = Math.floor((high + low) / 2);
      }

      if (low === midpoint || high === midpoint) {
         return null
      }
   }

   return midpoint
}