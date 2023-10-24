import styles from './searchBar.module.css';
import { Button, Dropdown } from '@/components/core';
import { IUseState } from '@/lib/useStateType';
import { IuseDropdown } from '@/components/core/Dropdown/useDropdown';

interface SearchBarProps {
  search: IUseState<string>;
  location: IUseState<string>;
  experienceDropdown: IuseDropdown;
  experienceDropdownOptions: string[];
  onSearch?: () => void;
}

const SearchBar = ({
  search,
  location,
  experienceDropdown,
  experienceDropdownOptions,
  onSearch = () => {},
}: SearchBarProps) => {
  return (
    <div className={styles.searchContainer}>
      <input
        onChange={(e) => search.setValue(e.target.value)}
        placeholder="Search for a job, company or industry"
        className={styles.searchInput}
      ></input>
      <Dropdown title="Experience" {...experienceDropdown} options={experienceDropdownOptions} />
      <input
        onChange={(e) => location.setValue(e.target.value)}
        placeholder="Search for location"
        className={styles.locationInput}
      ></input>
      <Button onClick={onSearch} variant="search" className={styles.searchButton}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
