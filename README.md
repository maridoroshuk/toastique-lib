# [toastique-toast](https://www.npmjs.com/package/toastique-toast)

### You can try the [demo here](https://toastique.netlify.app/).

## Installation

```
$ npm install --save toastique-toast
$ yarn add toastique-toast
```


## The gist

```jsx
import { toast, ToastList } from 'toastique-toast'

function App() {
  const [toasts, setToasts] = useState([])
  const [properties, setProperties] = useState({});

  const handleShowToast = () => {
    setToasts(toast.getToasts('info', {
      heading: "Wow",
      content: "I'm an info toast!"
    }))

    setProperties({
      position: "bottom-right",
      autoCloseTime: 3000
    })
  }

  return (
    <div>
      <button type='button' onClick={handleShowToast}>Show</button>
      {toasts.length > 0 && <ToastList toast={toast} toastList={toasts} properties={properties}/>}
    </div>
  );
}

export default App;
  }
```

## options


| Option  | Description            | default     | type      | acceptable values        |
| ------- | ---------------------- | ----------- | --------- | ------------------------ |
| heading | toast title            |      -      | String    |           -              |
| content | toast text content     |      -      | String    |           -              |
| color   | toast color            |#9f86c0 (info)      | String |          -           |
|         |                        | #fee440 (warning)  |     |                         |
|         |                        | #d62828 (error)    |     |                         |
|         |                        | #57cc99 (success)  |     |                         |
| position| toast position on the screen String| 'top-right' | String | 'top-right' /  bottom-right' / 'top-left' /  'bottom-left'     |
| autoCloseTime | toast duration   | 5000        | Number    |           -              |
| animation| toast appearance      |'from bottom'| String    |'from bottom' / from right side'|
| 'space between toasts' | space beetween each toast | 'medium'    | String    | 'small' / 'medium' / 'large' |

