// High-Performance Redis Cache Layer for AuthVault JWT Authentication Service
export class CacheManager {
  private store = new Map<string, { data: any; expiresAt: number }>();

  async get<T>(key: string): Promise<T | null> {
    const entry = this.store.get(key);
    if (!entry) return null;
    if (Date.now() > entry.expiresAt) {
      this.store.delete(key);
      return null;
    }
    return entry.data as T;
  }

  async set(key: string, data: any, ttlSeconds = 300): Promise<void> {
    this.store.set(key, {
      data,
      expiresAt: Date.now() + ttlSeconds * 1000
    });
  }
}

export const cache = new CacheManager();
