import './applyButton.css';

export const ApplyNow = ({ link }: any) => {
  return (
    <>
      <a className="applyButton" href={link} target="_blank" rel="noreferrer">
        Apply now
      </a>
    </>
  );
};
