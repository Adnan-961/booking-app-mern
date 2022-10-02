import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setErr(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
};

const reFetch = async () => {
  const fetchData = async () => {
    setLoading(true);

    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setErr(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
