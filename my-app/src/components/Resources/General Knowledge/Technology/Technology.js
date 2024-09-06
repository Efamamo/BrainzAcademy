import { useEffect, useState } from 'react';
import SpecificGeneral from '../SpecificGeneral';
import technology from '../data/technology';
import '../EachGeneral.css';
import Search from '../../../Search';
import EmptyIndicator from '../../../EmptyIndicatior';
import placeholder from '../../../../images/placeholder.webp';

function Technology() {
  const [search, setSearch] = useState('');
  const [currentElemets, setCurrentElemets] = useState(technology.slice(0, 10));
  const [count, setCount] = useState(10);

  function handleSearch(val) {
    setSearch(val);
  }

  const filteredTech = currentElemets.filter((tech) => {
    return tech.description.toLowerCase().includes(search.toLowerCase());
  });

  function load() {
    setCurrentElemets(technology.slice(0, count + 10));
    setCount((prev) => prev + 10);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="general-container">
      <p className="intro">
        History is the captivating study of humanity's past, a window into the
        events, cultures, and individuals that have shaped our present world. It
        encompasses the rise and fall of civilizations, the triumphs and
        tragedies of nations, and the stories of people who have left their mark
        on the sands of time. Through history, we gain a deeper understanding of
        where we come from, the paths we've taken, and the lessons we've learned
        along the way.
      </p>
      <div className="search">
        <Search onSearch={handleSearch} />
      </div>
      {filteredTech.length === 0 && <EmptyIndicator text="No Data" />}

      {filteredTech.map((tech) => (
        <SpecificGeneral
          key={tech.title}
          title={tech.title}
          description={tech.description}
          image={placeholder}
          link={tech.link}
        />
      ))}
      {filteredTech.length > 0 && count < technology.length && (
        <button onClick={load} id="loadMoreBtn" className="load-more-btn">
          Load More...
        </button>
      )}
    </div>
  );
}

export default Technology;
