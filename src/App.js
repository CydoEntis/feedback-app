import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FEEDBACK_DATA from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FEEDBACK_DATA);

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
