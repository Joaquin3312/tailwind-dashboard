import data from '../../data/data.json';
import { OverViewCard, OverviewTodayCard } from './OverViewCard';
//console.log(data.overview);

const convertNumberToK = (number) => {
  if(number >= 10000){
    number /= 1000
    return `${number}k`
  }
  return number
}

export const OverViewContainer = () => {
  return(
    <section className='max-w-[1440px] flex flex-wrap gap-[30px] place-content-center absolute top-[190px] left-0 right-0 mx-auto'>
      {
        data.overview.map((item)=> (
          <OverViewCard key={item.id} dato={item} convertNumberToK={convertNumberToK} />
        ))
      }
    </section>
  );
}

export const OverviewTodayContainer = () => {
  return (
    <section className=''>
      <h2 className='font-semibold p-2 mb-2 ml-[32px] mr-[32px] text-Dark-Grayish-Blue mt-1 '>Overview Today ✅</h2>
      <hr className='border border-Dark-Grayish-Blue mb-4 rounded-xl ml-[32px] mr-[32px] ' />
      <div className='flex flex-wrap flex-raw gap-1'>
      {
        data['overview-today'].map((item)=>
          <OverviewTodayCard key={item.id} item={item} convertNumberToK={convertNumberToK} />
        )
      }
    </div>
    </section>
  );
}

