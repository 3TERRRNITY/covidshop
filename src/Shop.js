import React, { useState, useEffect } from "react";
import Item from "./Item";
import Loader from "./Load";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      setLoader(true);
      try {
        const response = await fetch("https://covid-shop-mcs.herokuapp.com");
        const data = await response.json();
        if (data) {
          setItems(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    })();
  }, []);

  if (loader) {
    return <Loader />;
  }
  return (
    <div>
      {items &&
        items.map((item) => (
          <Item name={item.name} desc={item.desc} img={item.image} />
        ))}
    </div>
  );
}
