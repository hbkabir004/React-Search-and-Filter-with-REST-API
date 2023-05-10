import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [paginate, setpaginate] = useState(4);

  useEffect(() => {
    fetch("https://mrittik-server.vercel.app/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setLoaded(true);
          setItems(result);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
  }, []);

  const data = Object.values(items);
  // console.log(data)

  const search_parameters = Object.keys(Object.assign({}, ...data));
  // console.log(search_parameters[1]);
  const filter_items = [...new Set(data.map((item) => item.categoryName))];

  function search(items) {
    return items.filter(
      (item) =>
        item.categoryName.includes(filter) 
        &&
        search_parameters.some((parameter) =>
          item[parameter] && item[parameter].toString().toLowerCase().includes(query)
        )
    );
  }

  const load_more = (event) => {
    setpaginate((prevValue) => prevValue + 4);
  };

  if (error) {
    return <>{error.message}</>;
  } else if (!loaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="wrapper">
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for..."
              onChange={(e) => setQuery(e.target.value)}
            />
            <span className="sr-only">Search Products here</span>
          </label>

          <div className="select">
            <select
              onChange={(e) => setFilter(e.target.value)}
              className="custom-select"
              aria-label="Filter Products By Category"
            >
              <option value="">Filter By Category</option>
              {filter_items.map((item) => (
                // console.log(item)
                <option key={item} value={item}>Filter By {item}</option>
              ))}
            </select>
            <span className="focus"></span>
          </div>
        </div>

        <ul className="card-grid">
          {search(data)
            .slice(0, paginate)
            .map((item) => (
              // console.log(item)
              <ProductCard
                key={item.id}
                item={item} />
            ))}
        </ul>
        <button onClick={load_more}>Load More</button>
      </div>
    );
  }
}

export default App;
