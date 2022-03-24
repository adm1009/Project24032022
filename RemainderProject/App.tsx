import React, { Component, useState } from 'react';
import data from "./data";
import List from "./List"
type myState ={
  people:any
}
class App extends React.Component<myState,any> {
  constructor(props:myState){
    super(props);
    this.state={
      people:data
    }
  }
  render(){
  return (
    <div>
      <h1>{this.state.people.length} birthdays today</h1>
      <List people={this.state.people}/>
      <button onClick={()=>this.setState({people:[]})}>Clear All</button>
    </div>
  );
}
}
export default App;
// import React, { useState } from 'react';
// import data from "./data";
// import List from "./List"
// function App() {
//   const [people,setPeople] =useState(data)
//   return (
//     <div>
//       <h1>{people.length} birthdays today</h1>
//       <List people={people}/>
//       <button onClick={()=>setPeople([])}>Clear All</button>
//     </div>
//   );
// }

// export default App;
