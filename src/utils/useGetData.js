import { useEffect, useState } from "react";

const mainURL = "https://lushoriam-server-abnd.vercel.app/api/v1/";

const useGetData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(mainURL + url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  return data;
};

export default useGetData;
