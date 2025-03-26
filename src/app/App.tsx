import { FC, useRef } from 'react';
import { FullscreenButton } from '@modules/ui';

import './styles.css';

const App: FC = () => {
  const screenRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      <div ref={screenRef} className={'bg-gray-500 h-screen w-screen'}>
        <FullscreenButton screenElementRef={screenRef} />
      </div>
    </div>
  );
};

export default App;
