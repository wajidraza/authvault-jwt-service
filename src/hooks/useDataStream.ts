import { useState, useEffect } from 'react';

export function useDataStream<T = any>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      try {
        setLoading(true);
        // Simulated API data fetch
        const res = { status: "OK", timestamp: Date.now(), payload: "AuthVault JWT Authentication Service Stream Data" } as unknown as T;
        if (isMounted) setData(res);
      } catch (err) {
        if (isMounted) setError(err as Error);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    fetchData();
    return () => { isMounted = false; };
  }, [endpoint]);

  return { data, loading, error };
}
