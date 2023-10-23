import './detailedJobCard.css';
import { ApplyNow } from './JobDetails/ApplyNow';
import { default as LinkSvg } from '@/components/icons/Link';
import { default as CloseSvg } from '@/components/icons/CloseMenu';
import { default as BookmarkSvg } from '@/components/icons/Bookmark';
import { default as ShareSvg } from '@/components/icons/Share';

const DetailedJobCard = ({ close }: any) => {
  return window.innerWidth > 750 ? (
    <div className="detailed-card-wrapper">
      <div className="detailed-card">
        <section className="detailed-card-left">
          <div className="profile detailed-card-profile">
            <img src="pictures/company-logo.jpg" alt="" className="profilePicture" />

            <h2 className="profileName">University of Eastern Finland</h2>

            <a href="/" className="profileWebsite">
              <LinkSvg />
              <p>Visit Website</p>
            </a>

            <ApplyNow link="#" />

            <a href="/" className="profileReports">
              <p>Report as offline or expired</p>
            </a>
          </div>
        </section>
        <section className="detailed-card-right">
          <div className="detailed-card-header">
            <div className="detailed-card-header-text-container">
              <h2>Job Name</h2>
              <p>Full time | On Site</p>
              <p>Espoo | 35,0000 annually</p>
            </div>
            <div className="detailed-card-buttons">
              <button onClick={close}>
                <CloseSvg />
              </button>
              <button>
                <BookmarkSvg />
              </button>
              <button>
                <ShareSvg />
              </button>
            </div>
          </div>
          <div className="detailed-card-details">
            <h2>Job Description</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>

            <h2>What you&apos;ll do</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </li>
              <li>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default DetailedJobCard;
