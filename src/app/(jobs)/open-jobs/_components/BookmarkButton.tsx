import { Button } from '@/components/core';
import './bookmarkButton.css';
import Bookmark from '@/components/icons/Bookmark';

const BookmarkButton = ({ onClick = () => {} }) => {
  return (
    <Button outline onClick={onClick}>
      <Bookmark />
    </Button>
  );
};

export default BookmarkButton;
