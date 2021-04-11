import { useState, useEffect } from "react";

const baseUrl = "https://jsonplaceholder.typicode.com/";

export default function useApi(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetching() {
      try {
        const response = await fetch(baseUrl + url);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    fetching();
  }, [url]);

  return { data, error, loading };
}
