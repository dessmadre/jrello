import { useState } from 'react';
import { AddBoardButton } from './AddBoardButton';
import { CreateBoardModal } from './AddBoardInput';

export const AddBoard = () => {
  const [show, shouldShow] = useState(true);
  const [title, setTitle] = useState('');

  const handleShow = () => {
    shouldShow((prev) => !prev);
    setTitle('');
  };

  return (
    <div className='w-full'>
      <div
        onClick={handleShow}
        className={`${show ? '' : 'hidden'} max-h-52 w-full`}
      >
        <AddBoardButton />
      </div>
      <div
        className={`${
          show ? 'hidden' : ''
        } max-h-52 w-full py-6 bg-gray-300  rounded-xl `}
      >
        <CreateBoardModal
          handleShow={handleShow}
          title={title}
          setTitle={setTitle}
        />
      </div>
    </div>
  );
};
