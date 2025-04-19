"use client";

import { useEffect } from "react";
import useStore from "./store";
import Card from "./components/Card";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const { countries, loading, error, setCountries, setLoading, setError } =
    useStore();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pageNumber: 1,
            itemsPerPage: 10,
          }),
        })

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch countries");
        }
        setCountries(data.data);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, [setCountries, setLoading, setError]);

  return (
    //! No tanto ternario
    <div className="">
      <h1>TerraScope!</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : !countries.length ? (
        <div>No countries found</div>
      ) : (
        countries.map((country) => (
          <Card
            key={country.id}
            name={country.name}
            flag={country.flag}
            continent={country.continent}
            capital={country.capital}
            population={country.population}
          />
        ))
      )}
    </div>
  );
}
