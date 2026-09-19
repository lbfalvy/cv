import { Page1 } from './Page1'
import { FocusCx, Options } from './Options'
import { Page2 } from './Page2'
import { useEffect, useState } from 'react'
import { LogosCx } from './Taglist'
import { Focus } from './Options';

export function Body(): React.ReactElement {
  const [showLogos, setLogos] = useState(true);
  const [focus, setFocus] = useState<Focus>('js');
  useEffect(() => {
    document.title = `Lawrence Bethlenfalvy CV ${JSON.stringify({
      focus,
      showLogos
    })}`;
  });
  return <LogosCx.Provider value={showLogos}>
    <FocusCx.Provider value={focus} >
      <Page1 />
      <Page2 />
      <Options setLogos={setLogos} setFocus={setFocus} />
    </FocusCx.Provider>
  </LogosCx.Provider>
}