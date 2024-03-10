import React from 'react';

const Modal = ({ isOpen, onClose, selectedItemIndex, onDelete, onAdd }) => {
    const handleAdd = () => {
        onAdd();
    };
    const handleDelete = () => {
        onDelete(selectedItemIndex);
    };
    return (
        isOpen && (
            <figure className="modal">
                <ul>
                    <li><button onClick={handleAdd}>Добавить</button></li>
                    <li><button onClick={handleDelete}>Удалить</button></li>
                    <li><button onClick={onClose}>Закрыть</button></li>
                </ul>
            </figure>
        )
    );
};
export default Modal;
