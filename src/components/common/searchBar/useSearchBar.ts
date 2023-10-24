import { useDropdown } from '@/components/core';
import { IuseDropdown } from '@/components/core/Dropdown/useDropdown';
import { IUseState } from '@/lib/useStateType';
import { useState } from 'react';

interface IUseSearchBar {
  search: IUseState<string>;
  location: IUseState<string>;
  experienceDropdown: IuseDropdown;
}

export default function useSearchBar(): IUseSearchBar {
  const [searchValue, setSearchValue] = useState('');
  const experienceDropdown = useDropdown();
  const [locationValue, setLocationValue] = useState('');
  const search = { value: searchValue, setValue: setSearchValue };
  const location = { value: locationValue, setValue: setLocationValue };

  return { search, location, experienceDropdown };
}
