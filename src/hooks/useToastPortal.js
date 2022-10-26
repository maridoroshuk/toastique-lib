import { useEffect, useState } from 'react';
import uuid from '@/shared/helpers';

const useToastPortal = (position) => {
  const [loaded, setLoaded] = useState(false);
  const [portalId] = useState(`toast-portal-${uuid()}`);

  useEffect(() => {
    const div = document.createElement('div');

    div.id = portalId;
    div.style.cssText = `
      position: fixed;
      right: 0.5rem;
      z-index: 1000;
      top: ${position === 'top' ? '0.5rem' : null};
      bottom: ${position === 'bottom' ? '0.5rem' : null}
    `;

    document.getElementsByTagName('body')[0].prepend(div);

    setLoaded(true);

    return () => {
      document
        .getElementsByTagName('body')[0]
        .removeChild(div);
    };
  }, [portalId, position]);

  return { loaded, portalId };
};

export default useToastPortal;
