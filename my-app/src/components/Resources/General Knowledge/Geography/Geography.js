import geography from "../data/geography";
import SpecificGeneral from "../SpecificGeneral";
import "../EachGeneral.css";
import Search from "../../../Search";
import { useEffect, useState } from "react";
import EmptyIndicator from "../../../EmptyIndicatior";


function Geography() {
  const [search, setSearch] = useState("");
  const [currentElemets, setCurrentElemets] = useState(geography.slice(0,10))
  const [count, setCount] = useState(10)

  function handleSearch(val) {
    setSearch(val);
  }

  const filteredGeography = currentElemets.filter((each) => {
    return each.description.toLowerCase().includes(search.toLowerCase());
  });


  function load(){
    setCurrentElemets(geography.slice(0,count+10))
    setCount(prev => prev+10)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
   
    <div className="general-container">
      <p className="intro">
        Geography is the fascinating study of our planet and its various
        environments, cultures, and landscapes. It encompasses everything from
        the physical features of the Earth, such as mountains, rivers, and
        deserts, to the intricate ways humans interact with their surroundings.
        Through geography, we gain a deeper understanding of the world around
        us, exploring the natural processes that shape our environment and the
        diverse cultures that inhabit different regions.
      </p>
      <div className="search">
        <Search onSearch={handleSearch} />
      </div>

      {filteredGeography.length === 0 && <EmptyIndicator text="No Data"/>}

      {filteredGeography.map((geo) => (
        <SpecificGeneral
          key={geo.title}
          title={geo.title}
          description={geo.description}
          image={geo.image}
          link={geo.link}
        />
      ))}
      {filteredGeography.length>0 && count < geography.length &&  <button onClick={load} id="loadMoreBtn" className="load-more-btn">Load More...</button>}

    </div>
   
   
  );
}

export default Geography;
