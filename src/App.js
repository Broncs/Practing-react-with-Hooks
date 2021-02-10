import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import UseEffectOne from './components/UseEffectOne';
import UseEffectMouse from './components/UseEffectMouse';
import UseEffectContainer from './components/UseEffectContainer';
import UseEffectFour from './components/UseEffectFour';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import { GlobalContextProvider, GlobalContext } from './components/useContext';
import CounterOneReduce from './components/CounterOneReduce';
import CounterTwoReduce from './components/CounterTwoReducer';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import { useContext } from 'react';

import DataFetchingState from './components/DataFetchingState';
import DataFetchingReducer from './components/DataFetchingReducer';

function App() {
  return (
    <div className="App">
      <DataFetchingReducer />
      {/* <DataFetchingState /> */}
      {/* <GlobalContextProvider>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </GlobalContextProvider> */}
      {/* <CounterTwoReduce /> */}
      {/* <CounterOneReduce /> */}
      {/* <GlobalContextProvider>
        <ComponentC />
      </GlobalContextProvider> */}
      {/* <DataFetching /> */}
      {/* <UseEffectFour /> */}
      {/* <UseEffectContainer /> */}
      {/* <UseEffectMouse /> */}
      {/* <UseEffectOne /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
      {/* <PostList /> */}
      {/* <PostForm /> */}
    </div>
  );
}

export default App;
