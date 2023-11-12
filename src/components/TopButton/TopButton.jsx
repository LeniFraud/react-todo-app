import { BsArrowUpCircleFill } from 'react-icons/bs';
import { Button } from './TopButton.styled';

export const TopButton = () => {
  const onTopBtnClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <Button
        type="button"
        aria-label="Go to the top"
        onClick={() => onTopBtnClick()}
      >
        <BsArrowUpCircleFill size={48} />
      </Button>
    </>
  );
};
