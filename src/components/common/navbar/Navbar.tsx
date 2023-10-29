'use client';

import styles from './navbar.module.css';

import { useState, createContext, useContext, Context } from 'react';
import MenuIcon from '@/components/icons/MenuIcon';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Button } from '@/components/core';
import { default as cm } from '@/lib/classMerge';

const NavMenuContext: Context<any> = createContext(undefined);

const navbarMenuItems = [
  {
    text: 'Avoimet Työpaikat',
    link: '/open-jobs',
  },
  {
    text: 'Jätä työpaikkailmoitus',
    link: '/query',
  },
  {
    text: 'Suosikit',
    link: '/favorites',
  },
];

const MenuButton = () => {
  const vizContext: any = useContext(NavMenuContext);

  return (
    <>
      {vizContext?.sideBarVisible ? (
        <button
          className={styles.menuBurgerButton}
          onClick={() => vizContext?.setSideBarVisible(!vizContext?.sideBarVisible)}
        >
          <MenuIcon />
        </button>
      ) : (
        <button
          className={styles.menuBurgerButton}
          onClick={() => vizContext?.setSideBarVisible(!vizContext?.sideBarVisible)}
        >
          <MenuIcon />
        </button>
      )}
    </>
  );
};

const NavLink = ({ styling = '', ...props }) => {
  return (
    <Link href={props.link} className={cm(styles.navLink, styling)}>
      {props.text}
    </Link>
  );
};

//not used for anything but useful for mobile menu when maximized
// const SideBar = () => {
//   const vizContext: any = useContext(NavMenuContext);

//   const hideBar = () => vizContext.setSideBarVisible(false);

//   return (
//     <>
//       {vizContext?.sideBarVisible && (
//         <button className="sidebar-backblur" onClick={hideBar}>a</button>
//       )}
//       <div className={`sidebar`}>
//         <MenuButton />
//         <div className="">
//           {navbarMenuItems.map((item, i) => (
//             <NavLink key={i} link={item.link} text={item.text} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

const NavBarLayout = (props: any) => {
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const [navbarVisible] = useState(true);
  const { user } = useUser();
  const router = useRouter();

  // useEffect(() => {
  //   if (blacklistAddr.includes(router.)) setNavbarVisible(false);
  //   else setNavbarVisible(true);
  // }, [router.asPath]);

  return (
    <NavMenuContext.Provider
      value={{
        sideBarVisible: sideBarVisible,
        setSideBarVisible: setSideBarVisible,
      }}
    >
      {navbarVisible && (
        <header className={styles.navbar}>
          <a href="/" className={styles.navLogoWrapper}>
            <img className={styles.navLogo} alt="logo of urapolku" src={'/pictures/urapolku.png'} />
            <p>Urapolku</p>
          </a>
          <div className={styles.navItemsWrapper}>
            {navbarMenuItems.map((item: any) => (
              <NavLink key={item.link} link={item.link} text={item.text} styling={item.styling} />
            ))}

            {user ? (
              <Button
                outline
                variant="rounded"
                size="small"
                onClick={() => {
                  router.push('/api/auth/logout');
                  localStorage.clear();
                }}
              >
                Kirjaudu ulos
              </Button>
            ) : (
              <Button
                glow
                size="small"
                variant="rounded"
                onClick={() => router.push('/api/auth/login')}
              >
                Kirjaudu
              </Button>
            )}
          </div>
          <MenuButton />
        </header>
      )}
      {/*<SideBar />*/}
      {props.children}
    </NavMenuContext.Provider>
  );
};

export { MenuButton, NavBarLayout };
