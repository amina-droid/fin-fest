import React from 'react';
import { Typography } from 'antd';

import s from './AdditionalMaterials.module.sass';

export type Extra = {
  title?: string;
  links: ExtraLink[];
}
export type ExtraLink = {
  name: string;
  description?: string;
  href: string;
}

type Props = {
  links: Extra[]
}

const AdditionalMaterials: React.FC<Props> = ({ links }) => (
  <>{links.map((link, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <div key={`${i}_key`}>
      {link.title && (
        <div className={s.description}>{link.title}</div>
      )}
      <ul>{link.links.map(({ name: linkName, href, description }) => (
        <li key={href}>
          <Typography.Link target="_blank" href={href}>{linkName}</Typography.Link>
          {description && (
            <div className={s.description}>{description}</div>
          )}
        </li>
      ))}
      </ul>
    </div>
  ))}
  </>
);

export default AdditionalMaterials;
