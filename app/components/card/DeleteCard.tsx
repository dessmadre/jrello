import { useContent } from 'lib/useContent';

export const DeleteCard = ({ id, listId }) => {
  const { deleteCard } = useContent();

  const handleDelete = (e) => {
    e.preventDefault();
    deleteCard(id, listId);
  };

  return (
    <div
      className='delete__board--btn hover:shadow-md text-white hover:bg-red-500 w-24 py-2 text-center  rounded-lg cursor-pointer'
      onClick={handleDelete}
    >
      <a className='text-sm'>Delete Card</a>
    </div>
  );
};
