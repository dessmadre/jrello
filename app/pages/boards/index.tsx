import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Meta from 'components/common/Meta';
import { BoardButton } from 'components/board/BoardButton';
import { useAllBoardsQuery } from 'lib/graphql/allBoards.graphql';
import { BoardContainer } from 'components/board/BoardContainer';
import { AddBoard } from 'components/board/addBoard/AddBoard';
import { Header } from 'components/common/Header';
import { SectionSeperator } from 'components/common/SectionSeperator';

export default function Boards() {
  const router = useRouter();

  const { data, refetch } = useAllBoardsQuery({
    errorPolicy: 'ignore',
  });

  useEffect(() => {
    refetch();
  }, []);

  const userBoards = data?.allBoards.map((board) => {
    return (
      <BoardButton
        key={board._id}
        boardName={board.title}
        bgColor={board.bgColor}
        onClick={() => {
          router.push(`/boards/${board._id}`);
        }}
      />
    );
  });

  return (
    <div>
      <Meta boardTitle={'Jrello'} />
      <Header />
      <SectionSeperator />
      <BoardContainer>
        <AddBoard />
        {data && userBoards}
      </BoardContainer>
      <SectionSeperator />
    </div>
  );
}
