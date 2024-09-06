import { useEffect, useState } from 'react';
import SpecificGeneral from '../SpecificGeneral';
import economicsTopics from '../data/economics';
import '../EachGeneral.css';
import Search from '../../../Search';
import EmptyIndicator from '../../../EmptyIndicatior';
import placeholder from '../../../../images/placeholder.webp';

function Economics() {
  const [search, setSearch] = useState('');
  const [currentElemets, setCurrentElemets] = useState(
    economicsTopics.slice(0, 10)
  );
  const [count, setCount] = useState(10);

  function handleSearch(val) {
    setSearch(val);
  }

  const filteredEconomics = currentElemets.filter((economics) => {
    return economics.description.toLowerCase().includes(search.toLowerCase());
  });

  function load() {
    setCurrentElemets(economicsTopics.slice(0, count + 10));
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
      {filteredEconomics.length === 0 && <EmptyIndicator text="No Data" />}

      {filteredEconomics.map((economics) => (
        <SpecificGeneral
          key={economics.title}
          title={economics.title}
          description={economics.description}
          image={placeholder}
          link={economics.link}
        />
      ))}
      {filteredEconomics.length > 0 && count < economicsTopics.length && (
        <button onClick={load} id="loadMoreBtn" className="load-more-btn">
          Load More...
        </button>
      )}
    </div>
  );
}

export default Economics;
