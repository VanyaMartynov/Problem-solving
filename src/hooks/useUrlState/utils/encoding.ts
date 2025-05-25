/**
 * Encodes data to a URL-safe string
 * @param data - The data to encode
 * @returns URL-safe encoded string
 */
export const encodeData = (data: unknown): string => {
  const jsonString = JSON.stringify(data);
  const base64 = btoa(jsonString);
  return encodeURIComponent(base64);
};

/**
 * Decodes a URL-safe string back to data
 * @param encodedString - The encoded string to decode
 * @returns The decoded data
 */
export const decodeData = <T>(encodedString: string): T => {
  const base64 = decodeURIComponent(encodedString);
  const jsonString = atob(base64);
  return JSON.parse(jsonString) as T;
}; 