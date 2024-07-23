import { useEffect, useState } from "react";
import scienceData from "../data/science";

import "../EachGeneral.css";
import Search from "../../../Search";
import SpecificGeneral from "../SpecificGeneral";
import EmptyIndicator from "../../../EmptyIndicatior";


function Science() {
  const [search, setSearch] = useState("");
  const [currentScience, setCurrent] = useState(scienceData.slice(0, 10));
  const [count, setCount] = useState(10)

  const filteredScience = currentScience.filter((science) => {
    return science.description.toLowerCase().includes(search.toLowerCase());
  });


  function handleSearch(val) {
    setSearch(val);
  }

  function load() {
    setCurrent(scienceData.slice(0, count + 10));
    setCount(prev => prev+10)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="general-container">
      <p className="intro">
        Welcome to our science page, where we delve into the fascinating realms
        of natural phenomena and the intricate workings of our universe. From
        the study of fundamental particles in particle physics to the
        exploration of ecosystems in ecology, each discipline offers a unique
        perspective on how our world functions. Dive into the depths of geology,
        meteorology, oceanography, botany, zoology, biochemistry, and
        ecotoxicology to uncover the interconnectedness of life forms,
        geological processes, atmospheric dynamics, and biochemical reactions
        that shape our planet. Join us on a journey of discovery through these
        diverse scientific fields, where curiosity meets knowledge to illuminate
        the wonders of nature and the universe.
      </p>
      <div className="search">
        <Search onSearch={handleSearch} />
      </div>
      {filteredScience.length === 0 && <EmptyIndicator text="No Data"/>}

      {filteredScience.map((science) => (
        <SpecificGeneral
          key={science.title}
          title={science.title}
          description={science.description}
          image={science.image}
          link={science.link}
        />
      ))}
      { filteredScience.length>0 && count < scienceData.length && (
        <button onClick={load} id="loadMoreBtn" className="load-more-btn">
          Load More...
        </button>
      )}
    </div>
  );
}

export default Science;
