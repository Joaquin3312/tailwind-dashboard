import { useState, useEffect } from "react";

const Header = () =>{

  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const handleClick = () => {
    setIsDark(prev => !prev);
  };

  return(
    <>
      <header className="bg-Very-Pale-Blue dark:bg-Very-Dark-Blue rounded-b-xl h-[235px] pt-8 px-6 mb-[1000px] md:mb-[479px] xl:mb-[200px]  w-full">
        <p className='text-Very-Dark-Blue dark:text-Very-Pale-Blue text-2xl font-bold mb-1 text-center' >Social Media Dashboard</p>
        <p className="text-Dark-Grayish-Blue font-bold mb-6">Total Followers: 23,450</p>
        <hr className="border-Dark-Grayish-Blue py-2 border-t-2" />
        <div className="flex justify-around">
          <p className="text-Dark-Grayish-Blue font-bold">Dark Mode</p>
          <label htmlFor="dark-mode" className="border relative border-Toggle overflow-hidden bg-Toggle w-12 h-6 rounded-full cursor-pointer p-[3px]">
            <input onClick={handleClick} id="dark-mode" type="checkbox" className="peer sr-only" /> 
            <div className="w-full h-full peer-checked:bg-Toggle-Gradient absolute top-0 left-0"></div> 
            <div className="w-[18px] h-[18px] bg-Light-Grayish-Blue rounded-full peer-checked:translate-x-[24px] transition-all"></div>
          </label>
        </div>
      </header>
    </>
  );
}

export default Header;