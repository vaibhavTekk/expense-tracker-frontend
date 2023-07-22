import { useState, useEffect } from "react";

const useFetch = (url, body) => {
  const [data, setData] = useState(null);

  const [isPending, setisPending] = useState(true);

  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(url, body)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setisPending(false);
      })
      .catch((err) => {
        setisPending(false);
        setError(err.message);
      });
  }, [url, body]);

  return { data, isPending, error };
};

export default useFetch;
