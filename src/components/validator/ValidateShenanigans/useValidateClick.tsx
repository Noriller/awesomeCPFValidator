import { useEffect, useState } from 'react';
import { validateButton$ } from '../ValidateButton/ValidateButton';

export function useValidateClick() {
  const [shenanigan, setShenanigan] = useState(
    false,
  );

  useEffect(() => {
    const sub = validateButton$.subscribe(
      setShenanigan,
    );

    if (shenanigan)
      setTimeout(() => {
        validateButton$.next(false);
      }, 1000);

    return () => sub.unsubscribe();
  }, [shenanigan]);

  return shenanigan;
}
