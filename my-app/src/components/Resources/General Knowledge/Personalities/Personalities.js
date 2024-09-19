import { useEffect, useState } from 'react';
import SpecificGeneral from '../SpecificGeneral';
import famousPersonalitiesTopics from '../data/personalities';
import '../EachGeneral.css';
import Search from '../../../Search';
import EmptyIndicator from '../../../EmptyIndicatior';
import placeholder from '../../../../images/placeholder.webp';

function Personalities() {
  const [search, setSearch] = useState('');
  const [currentElemets, setCurrentElemets] = useState(
    famousPersonalitiesTopics.slice(0, 10)
  );
  const [count, setCount] = useState(10);

  function handleSearch(val) {
    setSearch(val);
  }

  const filteredPersonalities = currentElemets.filter((personality) => {
    return personality.description.toLowerCase().includes(search.toLowerCase());
  });

  function load() {
    setCurrentElemets(famousPersonalitiesTopics.slice(0, count + 10));
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
      {filteredPersonalities.length === 0 && <EmptyIndicator text="No Data" />}

      {filteredPersonalities.map((personality) => (
        <SpecificGeneral
          key={personality.title}
          title={personality.title}
          description={personality.description}
          image={placeholder}
          link={personality.link}
        />
      ))}
      {filteredPersonalities.length > 0 &&
        count < famousPersonalitiesTopics.length && (
          <button onClick={load} id="loadMoreBtn" className="load-more-btn">
            Load More...
          </button>
        )}
    </div>
  );
}

export default Personalities;