/**
 * 解析URL中的参数
 * @param url URL地址
 * @returns 参数对象
 */
export function parseUrlParams(url: string): {[key: string]: string} {
  const params: {[key: string]: string} = {};
  const urlParts = url.split('?');
  if (urlParts.length > 1) {
    const queryString = urlParts[1];
    const pairs = queryString.split('&');
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i].split('=');
      const key = decodeURIComponent(pair[0]);
      const value = decodeURIComponent(pair[1] || '');
      params[key] = value;
    }
  }
  return params;
}

/**
 * 获取URL中的域名
 * @param url URL地址
 * @returns 域名
 */
export function getDomainFromUrl(url: string): string {
  const urlParts = url.split('/');
  if (urlParts.length >= 3) {
    return urlParts[2];
  }
  return '';
}


/**
 * 获取URL中的路由
 * @param url URL地址
 * @returns 路由
 */
export function getRouteFromUrl(url: string): string {
  const urlParts = url.split('/');
  if (urlParts.length >= 4) {
    return urlParts[3];
  }
  return '';
}
