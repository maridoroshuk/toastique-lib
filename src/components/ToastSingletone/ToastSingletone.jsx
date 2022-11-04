/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable class-methods-use-this */
import React from 'react';
import uuid from '@/shared/helpers';
import ToastPortal from '../ToastPortal/ToastPortal';
import getDefaultToast from '../../shared/getDefaultToast';

class ToastSingletone {
  constructor() {
    if (ToastSingletone.instance) {
      throw new Error(
        'ToastSingletone cannot have more then one instance',
      );
    } else {
      ToastSingletone.instance = this;
      this.toasts = [];
    }
  }

  getToastProperties(properties) {
    const defaultPeoperties = getDefaultToast(
      properties.variant,
    );
    return {
      ...properties,
      id: uuid(),
      icon: defaultPeoperties.icon,
      heading:
        properties.heading || defaultPeoperties.heading,
      content:
        properties.content || defaultPeoperties.content,
      color: properties.color || defaultPeoperties.color,
    };
  }

  getToast(properties) {
    if (this.toasts.length < 3) {
      this.toasts = [
        ...this.toasts,
        this.getToastProperties(properties),
      ];
    }

    return (
      <ToastPortal {...properties} toasts={this.toasts} />
    );
  }
}

const toast = new ToastSingletone();

export default toast;
