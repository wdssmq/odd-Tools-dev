/**
 * 根据数组里某个数据进行排序
 * @param arr 需要排序的数组
 * @param key 排序依据的数据
 * @param order 排序方式，asc为升序，desc为降序，默认为升序
 * @returns 排序后的数组
 */
export function sortByKey(arr: any[], key: string, order: string = 'asc'): any[] {
  return arr.sort((a, b) => {
    if (order === 'asc') {
      return a[key] - b[key];
    } else {
      return b[key] - a[key];
    }
  });
}
