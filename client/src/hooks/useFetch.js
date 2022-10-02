import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    // const fetchData = async () => {
    //   setLoading(true);
    //   const res = axios.get(url)
    // };
  }, []);
};
