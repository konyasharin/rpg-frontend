import { FC, RefObject } from 'react';
import { Fullscreen } from '@core/utils';
import { FullscreenIcon } from '@shared/assets/icons';
import { UnstyledButton } from '@shared/components';

interface FullscreenButtonProps {
  screenElementRef: RefObject<HTMLDivElement>;
}

export const FullscreenButton: FC<FullscreenButtonProps> = props => {
  const onClickHandle = async () => {
    if (props.screenElementRef.current) {
      await Fullscreen.toggleFullscreen(props.screenElementRef.current);
    }
  };

  return (
    <UnstyledButton onClick={onClickHandle}>
      <FullscreenIcon />
    </UnstyledButton>
  );
};
