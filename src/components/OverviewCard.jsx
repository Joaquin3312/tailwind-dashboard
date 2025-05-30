import FacebookLogo from '../assets/images/icon-facebook.svg';
import TwitterLogo from '../assets/images/icon-twitter.svg';
import InstagramLogo from '../assets/images/icon-instagram.svg';
import YoutubeLogo from '../assets/images/icon-youtube.svg';
import UpLogo from '../assets/images/icon-up.svg';
import DownLogo from '../assets/images/icon-down.svg';

const networkLogos = {
  Facebook: FacebookLogo,
  Twitter: TwitterLogo,
  Instagram: InstagramLogo,
  YouTube: YoutubeLogo,
};

export const OverViewCard = ({ dato, convertNumberToK }) => {
  const networkColors = {
    Facebook: 'bg-Facebook',
    Twitter: 'bg-Twitter',
    Instagram: 'bg-Instagram-Gradient',
    YouTube: 'bg-Youtube'
  };
  return (
    <article className="rounded bg-Light-Grayish-Blue w-[325px] h-[215px] mb-4 mx-auto text-center dark:bg-Dark-Desaturated-Blue hover:brightness-96 cursor-pointer dark:hover:brightness-123">
      <ul >
        <hr className={`w-full h-1.5 my-4 ${networkColors[dato.network]} border-0 rounded-tl-sm rounded-tr-sm  mb-5`} />
        <div className='flex flew-raw items-center justify-center gap-2'>
          <img src={networkLogos[dato.network]} alt={`logo ${dato.network}`} className="h-5 w-5" />
          <p className='text-xs text-Dark-Grayish-Blue font-bold'>{dato.user}</p>
        </div>
        <p className='text-[56px] font-bold text-Very-Dark-Blue mb-1 dark:text-Light-Grayish-Blue'> {convertNumberToK ? convertNumberToK(dato.audience) : dato.audience}</p>
        <p className='uppercase tracking-[5px] text-Dark-Grayish-Blue text-xs '>{dato.audienceType}</p>
        <div className='flex flex-raw justify-center gap-3 items-center pt-1 text-sm' >
          <img src={dato.isUp ? UpLogo : DownLogo} className='w-[12px] h-[12px]'/>  
          <p className={`${dato.isUp ? 'text-Lime-Green' : 'text-Bright-Red'} `} >{  dato.today } Today</p>
        </div>
      </ul>
    </article>
  );
};

export const OverviewTodayCard = ({item, convertNumberToK}) => {
  return(
    <div className=' bg-Light-Grayish-Blue w-[326px] h-[126px] mb-4 rounded-[5px] p-[25px] mx-auto cursor-pointer hover:brightness-95 dark:bg-Dark-Desaturated-Blue  dark:hover:brightness-125 '>
      <div className='flex justify-between '>
        <p className='font-semibold text-xl text-Dark-Grayish-Blue dark:text-Light-Grayish-Blue' >{item.statsType}</p>
        <img src={networkLogos[item.network]} alt={`logo ${item.network}`} className="h-5 w-5" />
      </div>
      <div className='flex justify-between'>
        <p className='text-Very-Dark-Blue dark:text-Light-Grayish-Blue text-4xl font-bold'>{convertNumberToK(item.stats)}</p>
        <div className='flex flex-raw justify-center gap-3 items-center pt-1 text-sm' >
          <img src={item.isUp ? UpLogo : DownLogo} className='w-[12px] h-[12px]' />  
          <p className={`font-bold text-xs ${item.isUp ? 'text-Lime-Green' : 'text-Bright-Red'} `} >{  item.porcentage }%</p>
        </div>
      </div>
    </div>
  );
}