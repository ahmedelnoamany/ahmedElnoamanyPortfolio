import React from 'react';
import 'styles/main.scss';

export default () => {
  return (
    <div className='intro-container'>
      <h1 className='text text__base text__base--title'>
        Programming With Style
      </h1>
      <span className='text text__base text__base--descriptionLarge'>
        With little programming experience, I plunged myself into a computer science 
        degree with high hopes
      </span>
      <h2 className="text text__base text__base--subheading">
        It paid off.
      </h2>
      <span className='text text__base text__base--description'>
        Although I learnt a lot about computers and programming 
        languages, I still didn’t feel like I had found my calling
      </span>
      <h2 className='text text__base text__base--subheading'>
        I took a class.
      </h2>
      <span className='text text__base text__base--descriptionLarge'>
        I started diving into the web / mobile side of things. I loved the flexibility of CSS styling techinques, of Javascript, 
        and all the libraries that existed for it and started dreaming of all the things I could make.
      </span>
      <h2 className='text text__base text__base--subheading'>
        I built them.
      </h2>
      <h1 className='text text__base text__base--subheading'>
        Let me build your dream.
      </h1>
    </div>
  )
}