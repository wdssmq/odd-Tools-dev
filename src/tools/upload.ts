
/**
 * 将Blob对象转换为base64字符串
 * @param blob Blob对象
 * @returns Promise<string> 返回一个Promise对象，resolve时返回base64字符串
 */

export function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64String = reader.result as string;
      resolve(base64String.split(',')[1]);
    };
    reader.onerror = () => {
      reject('Unable to convert blob to base64');
    };
  });
}

/**
 * 将base64字符串转换为Blob对象
 * @param base64String base64字符串
 * @returns Blob 返回一个Blob对象
 */
export function base64ToBlob(base64String: string): Blob {
  const byteString = atob(base64String);
  const mimeString = byteString
    .split('')
    .map((char) => char.charCodeAt(0))
    .reduce((prev, curr) => prev + String.fromCharCode(curr), '');
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }
  return new Blob([arrayBuffer], { type: mimeString });
}

/**
 * 将Blob对象转换为可访问的URL地址
 * @param blob Blob对象
 * @returns string 返回一个可访问的URL地址
 */
export function blobToUrl(blob: Blob): string {
  const url = URL.createObjectURL(blob);
  return url;
}

/**
 * 下载base64字符串为文件
 * @param base64String base64字符串
 * @param fileName 文件名
 */
export function downloadBase64File(base64String: string, fileName: string) {
  const blob = base64ToBlob(base64String);
  const url = blobToUrl(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * 下载Blob对象为文件
 * @param blob Blob对象
 * @param fileName 文件名
 */
export function downloadBlobFile(blob: Blob, fileName: string) {
  const url = blobToUrl(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

