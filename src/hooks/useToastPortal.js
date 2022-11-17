import { useLayoutEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import getPortalPosition from '@/shared/getPortalPosition';

const useToastPortal = (position) => {
  const [loaded, setLoaded] = useState(false);
  const [portalId] = useState(`toast-portal-${uuidv4()}`);

  useLayoutEffect(() => {
    const div = document.createElement('div');

    div.id = portalId;
    div.style.cssText = getPortalPosition(position);

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
