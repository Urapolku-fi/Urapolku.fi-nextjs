import './compareJobCard.css';
import Plus from '@/components/icons/Plus';

//TODO: definitely don't use null
//TODO: icons seem to be incorrectly sized

const CompareJobCard = ({ data = null, empty = false, removeComparedJobById }: any) => {
  return (
    <>
      {empty ? (
        <div className="empty-compare-job-card">
          <Plus />
        </div>
      ) : (
        <div className="compare-job-card">
          <div className="compare-job-card-child" />
          <img className="compare-job-card-item" alt="" src={'/pictures/job-example-image.png'} />
          <div className="compare-job-card-text-container">
            <div className="compare-job-card-header">{data.title}</div>
            <div className="full-time-container">
              <span className="full-time-container1">
                <p className="full-time">{data.type}</p>
                <p className="full-time">{data.location}</p>
              </span>
            </div>
          </div>

          <div
            className="compare-job-card-inner"
            onClick={() => {
              removeComparedJobById(data.id);
            }}
          >
            <img className="group-icon" alt="" src={'svg/close-icon.svg'} />
          </div>
        </div>
      )}
    </>
  );
};

export default CompareJobCard;
