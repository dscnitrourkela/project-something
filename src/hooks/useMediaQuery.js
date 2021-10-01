import { useState, useEffect } from 'react';

export default (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener('resize', listener);
    return () => media.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};
