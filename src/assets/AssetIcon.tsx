import React from 'react';
import { Image } from 'react-native';

const IconProvider = (source:any) => ({
  toReactElement: ({ ...props }) => (
    <Image {...props} source={source}/>
  ),
});

export const AssetIconsPack = {
  name: 'assets',
  icons: {
    'toys': IconProvider(require('./icons/toys.png')),
    'console': IconProvider(require('./icons/console.png')),
    'pokemon': IconProvider(require('./icons/pokemon.png')),
    'snkrs': IconProvider(require('./icons/snkrs.png')),
    'clothes': IconProvider(require('./icons/clothe.png')),
    // ...
  },
};