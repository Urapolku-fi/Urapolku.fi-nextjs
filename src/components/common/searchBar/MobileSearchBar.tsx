import styles from './mobileSearchBar.module.css';
import Search from '@/components/icons/Search';

//TODO: Add functionality to the search bar
function MobileSearchBar() {
  return (
    <div className={styles.container}>
      <Search className={styles.icon} />
      <input className={styles.input} placeholder='Search' type="text" />
    </div>
  );
}

export default MobileSearchBar;
