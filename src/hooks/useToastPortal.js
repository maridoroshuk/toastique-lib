import { useLayoutEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { spaces } from '@/theme/sizes';

const useToastPortal = (position) => {
  const [loaded, setLoaded] = useState(false);
  const [portalId] = useState(`toast-portal-${uuidv4()}`);

  useLayoutEffect(() => {
    const div = document.createElement('div');

    div.id = portalId;
    div.style.cssText = `
      position: fixed;
      left: ${
  position.includes('left') ? `${spaces.xs}px` : null
};
      right: ${
  position.includes('right') ? `${spaces.xs}px` : null
};
      top: ${
  position.includes('top') ? `${spaces.xs}px` : null
};
      bottom: ${
  position.includes('bottom')
    ? `${spaces.xs}px`
    : null
};
      z-index: 1000;
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
