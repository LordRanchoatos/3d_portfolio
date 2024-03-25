import { styles } from '../style';
import { motion } from 'framer-motion';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute insert-0 top-[129px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className="text-[#915eff]">David</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications and websites. I have a passion for
            creating beautiful, functional, and accessible websites. I am a
            self-taught developer who is always looking to learn new
            technologies and improve my skills. I am currently working on a
            project that will be released soon.
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am currently working on a project that will be released soon.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
