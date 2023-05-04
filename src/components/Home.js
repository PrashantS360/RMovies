import React from 'react';
import SliderItems from './SliderItems';

const Home = ({setProgress}) => {
  return (
    <div className="flex justify-center my-24 md:my-16">
      <div className='max-w-[1700px] min-w-[80%]'>
        <SliderItems setProgress={setProgress} type="Scripted" sliderNo={1} recmd={true} title="Scripted" />
        <SliderItems setProgress={setProgress} type="Variety" sliderNo={2} recmd={true} title="Variety" />
        <SliderItems setProgress={setProgress} type="Documentary" sliderNo={3} title="Documentary" />
      </div>
    </div>
  );
};

export default Home;
