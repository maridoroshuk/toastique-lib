/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import ToastManager from '../utils/toast-singletone';

export const ToastContext = createContext();

export function ToastProvider({ children }) {
  const toastSingletone = useMemo(() => new ToastManager());
  return (
    <ToastContext.Provider value={toastSingletone}>
      {children}
    </ToastContext.Provider>
  );
}

ToastProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
