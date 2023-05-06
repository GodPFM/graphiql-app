import GraphLogoBlock from '@/components/GraphLogoBlock/GraphLogoBlock';
import React from 'react';
import FormRegistration from '@/components/Form/FormSignin';
import { ParticlesBackground } from '@/components/ui/ParticlesBackground/ParticlesBackground';

const Auth = () => (
  <div className={'bg-gradient-to-br from-[#7c22ce] via-60% via-[#3c1a98] to-[#00197c] w-full'}>
    <ParticlesBackground />
    <div
      className={
        'relative w-full h-full flex justify-around items-center z-10 pr-[3.7%] pl-[3.7%] pt-5 pb-5'
      }
    >
      <GraphLogoBlock>
        <FormRegistration />
      </GraphLogoBlock>
    </div>
  </div>
);

export default Auth;
