
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from './components/CardList/CardList';
import Modal from './components/ModalWindow/ModalWindow';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  useEffect(() => {
    axios.get('http://shibe.online/api/shibes?count=12&urls=true&httpsUrls=true')
      .then(response => {
        setItems(response.data.map(url => ({ url })));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  const handleContextMenu = (index) => {
    setSelectedItemIndex(index);
    setModalOpen(true);
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    setModalOpen(false);
  };

  const handleEdit = (index) => {
    console.log('Edit item:', index);
    setModalOpen(false);
  };

  const handleAdd = () => {
    axios.get('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true')
      .then(response => {
        const newItems = [...items, { url: response.data[0] }];
        setItems(newItems);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="app">
      <h1>DOGS</h1>
      <button onClick={handleModalToggle} className='menu'>MAIN MENU</button>
      <CardList items={items} onContextMenu={handleContextMenu} />
      <Modal isOpen={modalOpen} onClose={handleModalToggle} selectedItemIndex={selectedItemIndex} onDelete={handleDelete} onEdit={handleEdit} onAdd={handleAdd} />
    </div>
  );
};

export default App;


