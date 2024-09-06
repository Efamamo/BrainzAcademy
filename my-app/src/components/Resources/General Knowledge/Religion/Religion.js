import { useEffect, useState } from 'react';
import SpecificGeneral from '../SpecificGeneral';
import mythologyAndReligionTopics from '../data/religion';
import '../EachGeneral.css';
import Search from '../../../Search';
import EmptyIndicator from '../../../EmptyIndicatior';
import placeholder from '../../../../images/placeholder.webp';

function Religion() {
  const [search, setSearch] = useState('');
  const [currentElemets, setCurrentElemets] = useState(
    mythologyAndReligionTopics.slice(0, 10)
  );
  const [count, setCount] = useState(10);

  function handleSearch(val) {
    setSearch(val);
  }

  const filteredReligion = currentElemets.filter((religion) => {
    return religion.description.toLowerCase().includes(search.toLowerCase());
  });

  function load() {
    setCurrentElemets(mythologyAndReligionTopics.slice(0, count + 10));
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
      {filteredReligion.length === 0 && <EmptyIndicator text="No Data" />}

      {filteredReligion.map((religion) => (
        <SpecificGeneral
          key={religion.title}
          title={religion.title}
          description={religion.description}
          image={placeholder}
          link={religion.link}
        />
      ))}
      {filteredReligion.length > 0 &&
        count < mythologyAndReligionTopics.length && (
          <button onClick={load} id="loadMoreBtn" className="load-more-btn">
            Load More...
          </button>
        )}
    </div>
  );
}

export default Religion;
