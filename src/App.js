import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  
  // set up state value... "data" is the array of questions from data.js
  const [questions, setQuestions] = useState(data)

return <main>
  <div className="container">
    <h3>questions and answers about login</h3>
    <section class="info">
      {
        // iterate over the array...
        questions.map((question) =>{
          // return the "SingleQuestion" component, add in the "key" prop
          // and use the spread operator to pass in the rest of the properties...
          return <SingleQuestion key ={question.id} {...question} />
        })
      }
    </section>
  </div>
</main>

  
}   
  


export default App;
