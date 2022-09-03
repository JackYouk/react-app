import {Counter} from "./Counter";
import { Todo } from "./Todo";

const HelloWorld = ({name, items}) => {
  console.log(name);
  return (
    <div>
      <h1>Hello World -{name}</h1>
      <ul>
        {items?.map((item, index) => <li key={index}> {item} </li>)}
      </ul>
    </div>
  );
}


const App = () => {


  return (
    <div className="App">
      <div>
        <HelloWorld
          name={'Jack'}
          items={['Apple Juice', 'fronto', 'laptop']}
        />
        <HelloWorld
          name={'Zaza'}
          items={['mouse toy', 'claws', 'buddha']}
        />
      </div>
      <Counter />
      <Todo />
    </div>
  );
}

export default App;
