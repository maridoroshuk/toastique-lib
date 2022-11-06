import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import getDefaultToast from '@/shared/getDefaultToast';
import ToastContainer from '@/components/ToastContainer/ToastContainer';

class ToastSingletone {
  constructor() {
    if (ToastSingletone.instance) {
      throw new Error(
        'Toast cannot have more then one instance',
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
      id: uuidv4(),
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
      <ToastContainer {...properties} toasts={this.toasts} />
    );
  }
}

const toast = new ToastSingletone();

export default toast;
