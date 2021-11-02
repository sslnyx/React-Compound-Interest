import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calculator from "./sections/Calculator";
import CyberDragons from "./sections/CyberDragons";
import axios from "axios";

function App() {
  const [data, getData] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let {
          data: { data },
        } = await axios.get(
          "http://localhost:3000/s1/v1/cryptocurrency/quotes/latest?id=6783,9891,12082",
          {
            headers: {
              "X-CMC_PRO_API_KEY": import.meta.env.VITE_API_KEY,
            },
          }
        );
        console.log(data);

        getData((preVal) => (preVal = data));

        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    console.log(data);
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      <Calculator data={data} />
      <CyberDragons data={data} />
    </div>
  );
}

export default App;
