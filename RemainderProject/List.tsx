import React from 'react'

class List extends React.Component<any,any> {
    render(){
  return (
      <>
    {this.props.people.map((item:any)=>{ 
        const {id,name,age,image}=item;
        return(
        <div key={id}>
            <img src={image}/>
            <h3>{name}</h3>
            <h4>{age} years</h4>
        </div>
        )
    })}
    </>
  )
}
}
export default List;