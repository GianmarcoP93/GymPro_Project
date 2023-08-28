import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminLogout, logout, setIsExpiredError } from "../store/authSlice";

const defaultOptions = {
  method: "GET",
  headers: {},
  data: {},
};

export const useAxios = (url, options = { ...defaultOptions }) => {
  options = { ...defaultOptions, ...options };
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [_data, _setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const update = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await axios({ url, ...options });

      setData(response.data);
      _setData(response.data);
      setLoading(false);
    } catch (error) {
      if (error.response.status === 403) {
        dispatch(setIsExpiredError(true));
        dispatch(adminLogout());
        dispatch(logout());
      } else {
        if (error?.response?.data?.message) {
          setError(error.response.data);
        } else setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    update();
  }, [url]);

  return { data, _data, _setData, setData, error, update, setError, loading };
};
