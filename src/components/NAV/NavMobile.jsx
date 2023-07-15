import { useState } from "react";

export const NavMobile = () => {
  const linksContainerStyles = `flex 
  flex-col 
  bg-primary
  h-[90svh]
  justify-between
  items-end 
  font-medium
  py-16
  [&>ul]:flex 
  [&>ul]:flex-col 
  [&>ul>li]:px-5 
  [&>ul>li]:py-2`;
  
  const [more, setMore] = useState(false);

  const handleClick = () => {
    setMore(!more);
  };

  return (
    <>
      <nav
        className={`
         navDesk
         h-10
         p-5
         py-9
         bg-secondary
         flex
         justify-between
         items-center
         font-medium
      `}
      >
        <figure className="w-fit h-fit">
          <img className="w-[50px] h-[50px]" src="src/img/logo.svg " alt="" />
        </figure>
        <button onClick={handleClick} className="text-2xl px-3">
          <i
            className={
              !more
                ? "more-false fa-sharp fa-solid fa-ellipsis"
                : "more-true fa-sharp fa-solid fa-ellipsis"
            }
          ></i>
        </button>
      </nav>
      <div
        className={
          !more
            ? `hidden`
            : `links-container-show ${linksContainerStyles}`
        }
      >
        <ul className="flex gap-7 [&>li]:w-fit [&>li]:h-fit [&>li]:text-end">
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Anime</a>
          </li>
          <li>
            <a href="">Manga</a>
          </li>
        </ul>
        <ul className="flex gap-5 [&>li]:text-end">
          <li>
            <a href="">Login</a>
          </li>
          <li>
            <a href="">Register</a>
          </li>
        </ul>
      </div>
    </>
  );
};
