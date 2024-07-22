import { useEffect } from 'react';
import { unstable_useBlocker as useBlocker } from 'react-router-dom';

function usePrompt(message, when) {
  const blocker = useBlocker(() => {
    if (window.confirm(message)) {
      blocker.proceed();
    } else {
      blocker.reset();
    }
  }, when);

  useEffect(() => {
    if (!when) {
      blocker.reset();
    }
  }, [when, blocker]);
}

export default usePrompt;
