import { heroDesc, heroIntro, name } from '../data/siteMetaData';
const Hero = () => {
  return (
    <section className="mb-[170px] mt-[100px] flex items-center justify-between bg-slate-50">
      <div className="">
        {/* <img
          src="/images/profile.jpg"
          alt="Profile"
          className="object-cover rounded-full ring-1 ring-cyan-700 object-center"
        /> */}

        <h1 className="mt-10 text-[60px] font-thin text-slate-600  leading-[82px]">
          Hello, I&apos;m <br />
          <span className="tracking-widest text-slate-800">{name}</span>
        </h1>
      </div>
      <div>
        <p>{heroDesc}</p>
        <h2>{heroIntro}</h2>
      </div>
    </section>
  );
};

export default Hero;
