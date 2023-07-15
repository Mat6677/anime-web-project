export function NavDesk() {
  return (
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
      [&_a]:p-5
      [&_a]:py-2
    `}
    >
      <div className="flex items-center gap-7">
        <figure className="w-fit h-fit">
          <img className="w-[50px] h-[50px]" src="src/img/logo.svg" alt="" />
        </figure>
        <ul className="flex gap-7 [&>li]:w-fit [&>li]:h-fit">
          <li
            className={`
            transition-all rounded hover:scale-125 hover:bg-primary 
          `}
          >
            <a href="">Explore</a>
          </li>
          <li
            className={`
            transition-all rounded hover:scale-125 hover:bg-primary 
          `}
          >
            <a href="">Anime</a>
          </li>
          <li
            className={`
            transition-all rounded hover:scale-125 hover:bg-primary 
          `}
          >
            <a href="">Manga</a>
          </li>
        </ul>
      </div>
      <ul className="flex gap-5 [&>li]:w-fit [&>li]:h-fit">
        <li
          className={`
          transition-all rounded hover:scale-125 hover:bg-primary 
        `}
        >
          <a href="">Login</a>
        </li>
        <li
          className={`
          transition-all rounded hover:scale-125 hover:bg-primary 
        `}
        >
          <a href="">Register</a>
        </li>
      </ul>
    </nav>
  );
}
