import '../styles/RandomMenu.scss';
import { MouseEvent, useEffect, useState } from 'react';
import dropdownIcon from '../assets/random-menu/dropdownIcon.svg';

interface listValue {
  title: string;
  index: string;
  type: string;
  'famous-menu': string;
  reference: string;
  link: string;
}

function RandomMenu() {
  const [list, setList] = useState<listValue[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categoryData, setCategoryData] = useState<string | null>('전체');

  const fetchData = async () => {
    try {
      const response = await fetch(`EuljiroJMT.json`);
      const data = await response.json();
      setList(data);
    } catch (e) {
      console.error(`error : ${e}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDropdownOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryData = (e: MouseEvent) => {
    const { textContent } = e.target as HTMLElement;
    setCategoryData(textContent);
  };

  return (
    <section className='random-menu-table'>
      <div className='random-menu-table__nav-bar'>
        <div className='random-menu-table__nav-bar__dropdown' onClick={handleDropdownOpen}>
          {categoryData}
          <img
            className='random-menu-table__nav-bar__dropdown-img'
            src={dropdownIcon}
            alt='드롭다운 메뉴 아이콘'
          />
        </div>
        {isDropdownOpen && (
          <div
            className='random-menu-table__nav-bar__dropdown-menu-list'
            onClick={handleCategoryData}>
            <span className='random-menu-table__nav-bar__dropdown-menu-list-menu'>한식</span>
            <span className='random-menu-table__nav-bar__dropdown-menu-list-menu'>일식</span>
            <span className='random-menu-table__nav-bar__dropdown-menu-list-menu'>양식</span>
            <span className='random-menu-table__nav-bar__dropdown-menu-list-menu'>베트남</span>
            <span className='random-menu-table__nav-bar__dropdown-menu-list-menu'>중식</span>
            <span className='random-menu-table__nav-bar__dropdown-menu-list-menu'>인도</span>
            <span className='random-menu-table__nav-bar__dropdown-menu-list-menu'>멕시칸</span>
            <span className='random-menu-table__nav-bar__dropdown-menu-list-menu'>기타</span>
          </div>
        )}

        <p className='random-menu-table__nav-bar__name'>상호명</p>
        <p className='random-menu-table__nav-bar__favorite-menu'>대표 메뉴</p>
        <p className='random-menu-table__nav-bar__reference'>상호명</p>
        <p className='random-menu-table__nav-bar__link'>링크</p>
      </div>
      <div className='random-menu-table-list'></div>
    </section>
  );
}

export default RandomMenu;
