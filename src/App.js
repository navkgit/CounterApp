import './App.css';
import React,{useState} from 'react'

function App() {
  const [items, setItems] = useState([])
  const [itemName, setItemName] = useState('')

  function updateCount(id, change){
      const updatedItems = items.map( item=> item.id===id ? {...item, count:Math.max(0,item.count+change)} : item)
    setItems(updatedItems)
  }

  function resetCount(id){
    const updatedItems = items.map( item=> item.id===id ? {...item, count:0} : item)
    setItems(updatedItems)
  }

  function changeHandler(e){
    setItemName(e.target.value)
    console.log(e.target.value); 
  }

  function addItem(){
    const newItem = {id: Date.now(), name:`${itemName}`, count:0}
    setItems([...items,newItem])
  }
  return (
    <>
    <div className='App'>
      <h1>Multiple-Item Counter</h1>
        <input type="text" className='input-box' onChange={changeHandler}/>
        <button className='add-btn' onClick={addItem}>Add Item</button>
    </div>
    <div className="App">
      {items.map( item=> (
        <div className='cart' key={item.id}>
          <h3>{item.name} : {item.count}</h3>
          <button onClick={ ()=>updateCount(item.id, 1)} className='inr-btn'>+</button>
          <button onClick={ ()=>resetCount(item.id)} className='rst-btn'>reset</button>
          <button onClick={ ()=>updateCount(item.id, -1)} className='dcr-btn'>-</button>
        </div>  
      ))}
    </div>
    </>
  );
}

export default App;
