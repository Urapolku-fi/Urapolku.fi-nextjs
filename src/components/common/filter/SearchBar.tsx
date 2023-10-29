import styles from './searchBar.module.css';

import { default as SearchSvg } from '@/components/icons/Search';
import SingleOptionDropdown from './SingleOptionDropdown';

const SearchBar = ({ searchInput, handleInputChange }: any) => {
  return (
    <>
      <div className={styles.searchBar}>
        <div className={styles.searchBarLeft} />
        <input
          className={styles.searchForA}
          type="text"
          placeholder="Hae työtä, yritystä, tai toimialaa"
          onChange={handleInputChange}
          value={searchInput}
        />
        <div className={styles.lineParent}>
          <div id="experience-start" className={styles.frameItem} />
          <div className={styles.experience}>Kokemus</div>
          <SingleOptionDropdown
            options={[
              'ei työkokemusta',
              'alle 1 vuosi',
              '1 - 2 vuotta',
              '2 - 3 vuotta',
              '3 - 4 vuotta',
              '4 - 5 vuotta',
              '5 - 10 vuotta',
              'yli 10 vuotta',
            ]}
            childComponent={
              <img className={styles.searchBarExpandIcon} alt="" src={'/pictures/expand-arrow.png'} />
            }
          />

          <div className={styles.frameItem} />
          <div className={styles.colorParent}>
            <img className={styles.colorIcon} alt="" src={'/svg/map-indicator.svg'} />
            <div className={styles.experience}>Sijainti</div>
          </div>
        </div>
        <div className={styles.frameParent}>Search</div>
      </div>
      <div className={styles.mobileSearchBar}>
        <SearchSvg />
        <input type="text" placeholder="Search" />
      </div>
    </>
  );
};

export default SearchBar;
