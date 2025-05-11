import React, { useState, useEffect } from "react";
import api from "../apiFacade.js";

export default function Guides() {
  const [guideData, setGuideData] = useState([]);

  // useEffect
  useEffect(() => {
    const fun = async () => {
      setGuideData(await fetchGuideData());
    };

    fun();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      <h2>Guides</h2>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {guideData.map((e) => (
            <tr key={e.id}>
              <td>{e.firstname}</td>
              <td>{e.lastname}</td>
              <td>{e.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

async function fetchGuideData() {
  const response = await fetch(
    "https://tripapi.cphbusinessapps.dk/api/guides",
    api.makeOptions("GET", true)
  );
  const guideData = await response.json();

  return guideData;
}
