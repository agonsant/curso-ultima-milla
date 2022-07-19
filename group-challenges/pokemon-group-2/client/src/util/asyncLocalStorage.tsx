export const asyncLocalStorage = {
  setItem: async function (key: string, value: any) {
    await null;
    return localStorage.setItem(key, value);
  },
  getItem: async function (key: string) {
    await null;
    return localStorage.getItem(key);
  },
};
