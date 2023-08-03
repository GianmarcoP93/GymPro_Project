import { useEffect, useState } from "react";

const defaultOptions = {
  method: "GET",
  data: {},
  headers: {},
};

export const useFetch = (url, options = { ...defaultOptions }) => {
  options = { ...defaultOptions, ...options };
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [_url, _setUrl] = useState(url);
  const [loading, setLoading] = useState(true);

  const update = async () => {
    setLoading(true);
    if (!url) {
      _setUrl(url);
      return;
    }
    setError(null);
    setData(null);
    try {
      const response = await fetch(_url, options);
      if (response.ok) {
        setData(response.data);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    options.method === "POST" ? "" : update();
  }, [_url]);

  return { data, error, update };
};
