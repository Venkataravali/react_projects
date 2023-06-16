import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople] = useState(data)
  return <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people} /> 
      {/* setting up people prop and equals to state value  */}
      <button onClick={()=>setPeople([])}>
        clear all
      </button>
    </section>
  </main>
}

export default App;
