import { FC } from 'react';
import { Icon, PreparedIconProps } from '@shared/components';

import fullscreenIconSvg from '/icons/fullscreen-icon.svg';

export const FullscreenIcon: FC<PreparedIconProps> = props => {
  return <Icon svg={fullscreenIconSvg} {...props} />;
};
