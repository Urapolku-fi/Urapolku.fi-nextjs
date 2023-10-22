import { useEffect, useState } from 'react';
import './jobCard.css';
import BookmarkButton from './BookmarkButton';
import DetailedJobCard from './DetailedJobCard';
import CheckBox from '@/components/common/filter/CheckBox';
import objectShallowEqual from '@/lib/objectShallowEqual';

const JobCard = ({ data, comparedJobs, setComparedJobs }: any) => {
  const [compareToggled, setCompareToggled] = useState(false);
  const [showDetailedCard, setShowDetailedCard] = useState(false);

  const toggleCompareToggled = () => {
    const newCompareToggled = !compareToggled;
    if (newCompareToggled) {
      if (comparedJobs.length > 2) {
        return;
      }
      setComparedJobs([...comparedJobs, data]);
    } else {
      setComparedJobs(comparedJobs.filter((e: any) => !objectShallowEqual(e, data)));
    }
    setCompareToggled(newCompareToggled);
  };

  useEffect(() => {
    if (comparedJobs.filter((e: any) => e.id === data.id).length === 0) {
      setCompareToggled(false);
    }
  }, [comparedJobs, data.id]);

  return (
    <div className="jobcard" key={data.id}>
      {showDetailedCard && <DetailedJobCard close={() => setShowDetailedCard(false)} />}
      <div className="jobcard-child" />
      <div className="jobcard-info-welfare-container">
        <span className="jobcard-info-welfare-container1">
          <p className="jobcard-info">{`Western Uusimaa`}</p>
          <p className="jobcard-info">{data.area}</p>
        </span>
      </div>
      <div className="health-care-full-container">
        <span className="jobcard-info-welfare-container1">
          <p className="jobcard-title">{data.title}</p>
          <p className="jobcard-info">{data.field}</p>
          <p className="jobcard-info">{data.type}</p>
          <p className="jobcard-info">{data.salary}</p>
          <p className="jobcard-info">{data.location}</p>
        </span>
      </div>
      <div onClick={() => setShowDetailedCard(!showDetailedCard)} className="see-details-wrapper">
        <div className="see-details">Lue lisää</div>
      </div>
      <img className="jobcard-item" alt="" src={'/pictures/job-example-image.png'} />
      <CheckBox
        text="Lisää vertailtavaksi"
        toggled={compareToggled}
        onClick={toggleCompareToggled}
        forJobcard={true}
      />
      <BookmarkButton />
    </div>
  );
};

export default JobCard;
