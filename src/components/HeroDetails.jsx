import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchHero } from "../utils/utils";

import logoMarvel from "./Images/marvel.jpg";

export default function HeroDetails() {
  let { id } = useParams();

  const [hero, setHero] = useState([
    {
      name: "",
      description: "",
      thumbnail: {},
      series: "",
    },
  ]);

  useEffect(() => {
    fetchHero(id)
      .then((data) => {
        setHero(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  // let name;
  // let description;
  // let thumbnailPath;
  // let thumbnailExtension;
  // let thumbnailUrl;
  // let series;

  // useEffect(() => {
  //   if (hero.length) {
  //     console.log("teste", hero);
  //     name = hero.data.results[0].name;
  //     description = hero.data.results[0].description;
  //     thumbnailPath = hero.data.results[0].thumbnail.path;
  //     thumbnailExtension = hero.data.results[0].thumbnail.extension;
  //     thumbnailUrl = `${thumbnailPath}.${thumbnailExtension}`;
  //     series = hero.data.results[0].series.items;
  //   }
  // }, [hero]);

  return (
    <div className="container large">
      <div className="hero__details-container">
        {hero[0].thumbnail ? (
          <img
            src={`${hero[0].thumbnail.path}.${hero[0].thumbnail.extension}`}
            alt="hero image full size"
          />
        ) : null}
        <div className="hero__details">
          <h4>name</h4>
          <p>{hero[0].name}</p>
          {hero[0].description ? (
            <>
              <h4>description</h4>
              <p>{hero[0].description}</p>
            </>
          ) : null}
          <div className="hero__series">
            <h4>series</h4>
            <ul>
              {hero[0].series
                ? hero[0].series.items.map((item) => (
                    <li key={Math.random() * 1000}>{item.name}</li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
