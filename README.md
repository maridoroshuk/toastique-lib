# [toastique-toast](https://www.npmjs.com/package/toastique-toast)

### You can try the [demo here](https://toastique.netlify.app/?path=/story/toast--default).

## Installation

```
$ npm install --save toastique-toast
$ yarn add toastique-toast
```


## The gist

```jsx
  import React from 'react';

  import { ToastList , toast } from 'toastique-toast';
  
  function App(){
  const properties = {
    heading: 'Error!',
    content: 'Text message failed to send',
}
    const toasts = toast.getToasts('error', properties);

    return (
      <div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer toastList={toasts} properties={properties}/>
      </div>
    );
  }
```
