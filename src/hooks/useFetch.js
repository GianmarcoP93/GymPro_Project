import axios from "axios";
import { useEffect, useState } from "react";

const defaultOptions = {
  method: "GET",
  headers: {},
  data: {},
};

export const useAxios = (url, options = { ...defaultOptions }) => {
  options = { ...defaultOptions, ...options };
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const update = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await axios({ url, ...options });

      setData(response.data);
      setLoading(false);
    } catch (error) {
      if (error?.response?.data?.message) {
        setError(error.response.data);
      } else setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (options.method === "GET") {
      update();
    }
  }, [url]);

  return { data, error, update };
};
