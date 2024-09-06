import { useEffect, useState } from 'react';
import SpecificGeneral from '../SpecificGeneral';
import healthAndMedicineTopics from '../data/health';
import '../EachGeneral.css';
import Search from '../../../Search';
import EmptyIndicator from '../../../EmptyIndicatior';
import placeholder from '../../../../images/placeholder.webp';

function Health() {
  const [search, setSearch] = useState('');
  const [currentElemets, setCurrentElemets] = useState(
    healthAndMedicineTopics.slice(0, 10)
  );
  const [count, setCount] = useState(10);

  function handleSearch(val) {
    setSearch(val);
  }

  const filteredHealth = currentElemets.filter((health) => {
    return health.description.toLowerCase().includes(search.toLowerCase());
  });

  function load() {
    setCurrentElemets(healthAndMedicineTopics.slice(0, count + 10));
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
      {filteredHealth.length === 0 && <EmptyIndicator text="No Data" />}

      {filteredHealth.map((health) => (
        <SpecificGeneral
          key={health.title}
          title={health.title}
          description={health.description}
          image={placeholder}
          link={health.link}
        />
      ))}
      {filteredHealth.length > 0 && count < healthAndMedicineTopics.length && (
        <button onClick={load} id="loadMoreBtn" className="load-more-btn">
          Load More...
        </button>
      )}
    </div>
  );
}

export default Health;
