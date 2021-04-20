import { useRef, useState } from 'react';

import { DeleteCard } from 'components/card/DeleteCard';
import { useContent } from 'lib/useContent';

export const Card = ({ label, id, listId }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [title, setTitle] = useState(label);

  const cardRef = useRef(null);

  const { editCard } = useContent();

  const handlePressingEnter = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      editCard(id, title);
    }
  };

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const dragStart = (e) => {
    e.dataTransfer.setData('card_id', cardRef.current.id);
    console.log('Dragging', cardRef.current.id);
    setTimeout(() => {}, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  const handleHide = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <div
      id={id}
      draggable='true'
      onDragStart={dragStart}
      onDragEnd={dragOver}
      className={` group
       bg-white hover:bg-gray-300 w-full py-3 px-3  shadow-sm rounded-lg flex justify-start items-center cursor-pointer`}
      ref={cardRef}
      onDoubleClick={handleHide}
    >
      <textarea
        className='resize-none w-full group-hover:bg-gray-300 py-1 height-min px-2 cursor-pointer'
        value={title || ''}
        rows={1}
        ref={cardRef}
        onChange={handleTitleChange}
        onKeyPress={handlePressingEnter}
      />
      <div onClick={handleHide} className={`${isHidden ? 'hidden' : ''}`}>
        <div>
          <DeleteCard id={id} listId={listId} />
        </div>
        <div></div>
      </div>
    </div>
  );
};
