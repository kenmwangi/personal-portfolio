import Image from 'next/image';
import { heroIntro, name } from '../data/siteMetaData';
const Hero = () => {
  return (
    <section className="mb-[170px] mt-[100px] flex items-center justify-center flex-col">
      <div className="flex items-center gap-8 mb-8">
        <Image
          src="/images/profile.jpg"
          alt="Profile"
          className="object-cover rounded-full object-center"
          height={100}
          width={100}
        />
        <div>
          <h1 className="mt-10 text-xl md:text-3xl">{name}</h1>
          <p className="text-sm text-slate-600">{heroIntro}</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-center text-3xl md:text-5xl font-extralight tracking-wider leading-8">
          Developing purposeful <br /> & impactful user experiences
        </h2>
      </div>
    </section>
  );
};

export default Hero;
