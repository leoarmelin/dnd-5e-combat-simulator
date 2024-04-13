/** Use `StorageKey` as key values. */
class SessionData {
  setString(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  setObject(key: string, value: object) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  setNumber(key: string, value: number) {
    sessionStorage.setItem(key, String(value));
  }

  setBoolean(key: string, value: boolean) {
    sessionStorage.setItem(key, String(value));
  }

  getString(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  getObject<T>(key: string): T | null {
    const value = sessionStorage.getItem(key);
    if (value == null) return null;
    return JSON.parse(value) as T;
  }

  getNumber(key: string): number | null {
    const value = sessionStorage.getItem(key);
    if (value == null) return null;
    return Number(value);
  }

  getBoolean(key: string): boolean | null {
    const value = sessionStorage.getItem(key);
    if (value == null) return null;
    return Boolean(value);
  }

  removeItem(key: string) {
    sessionStorage.removeItem(key);
  }

  clear() {
    sessionStorage.clear();
  }
}

class LocalData {
  setString(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  setObject(key: string, value: object) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  setNumber(key: string, value: number) {
    localStorage.setItem(key, String(value));
  }

  setBoolean(key: string, value: boolean) {
    localStorage.setItem(key, String(value));
  }

  getString(key: string): string | null {
    return localStorage.getItem(key);
  }

  getObject<T>(key: string): T | null {
    const value = localStorage.getItem(key);
    if (value == null) return null;
    return JSON.parse(value) as T;
  }

  getNumber(key: string): number | null {
    const value = localStorage.getItem(key);
    if (value == null) return null;
    return Number(value);
  }

  getBoolean(key: string): boolean | null {
    const value = localStorage.getItem(key);
    if (value == null) return null;
    return Boolean(value);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}

const sessionData = new SessionData();
const localData = new LocalData();

export { sessionData, localData };
