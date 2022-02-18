import { useState } from 'react';
import { Tweet } from './components/Tweet';

function App() {
  const [ tweet, setTweet ] = useState<string[]>([
    'Tweet1',
    'Tweet2',
    'Tweet3'
  ])

  function createTweet(){
    setTweet([ ...tweet, 'mais um tweet' ])
  }

  return(
    <div>
      {tweet.map(tweet => {
        return <Tweet text={tweet} />
      })}

      <button onClick={createTweet}>Adicionar Tweet</button>
    </div>
  )
}

export default App
