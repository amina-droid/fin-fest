import React from 'react';
import partnersDictionary from './dictionary';

import s from './Partners.module.sass';

const Partners: React.FC = () => (
  <div className={s.partners}>
    {partnersDictionary.map(partner => (
      <a
        className={s.partnersImgLink}
        href={partner.link || ''}
        target="_blank"
        rel="noreferrer"
        key={partner.link}
      >
        <img
          alt={partner.link || ''}
          src={partner.img}
          className={s.partnersImg}
        />
      </a>
    ))}
  </div>
);

export default Partners;
