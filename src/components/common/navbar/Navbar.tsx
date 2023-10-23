'use client';

import { useState, createContext, useContext, Context } from 'react';
import './navbar.css';
import MenuIcon from '@/components/icons/MenuIcon';
// import CloseMenu from '@/components/icons/CloseMenu'; ???
// import { useAuth0 } from '@auth0/auth0-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Button } from '@/components/core';

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
          className="menu-burger-button"
          onClick={() => vizContext?.setSideBarVisible(!vizContext?.sideBarVisible)}
        >
          <MenuIcon />
        </button>
      ) : (
        <button
          className="menu-burger-button"
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
    <Link href={props.link} className={`nav-link${styling}`}>
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
        <header className="navbar">
          <a href="/" className="nav-logo-wrapper">
            <img className="nav-logo" alt="logo of urapolku" src={'/pictures/urapolku.png'} />
            <p>Urapolku</p>
          </a>
          <div className="nav-items-wrapper">
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
