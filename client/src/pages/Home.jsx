import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {headContainerAnimation,headContentAnimation,headTextAnimation,slideAnimation} from '../config/motion'


const Home = () => {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className='home' {...slideAnimation('left')}>
                    <motion.header {...slideAnimation('down')}>
                        <img src='./threejs.png' alt='logo' className='w-16 h-16 object-contain'></img>
                    </motion.header>

                    <motion.div className='home-content' {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className='head-text'>
                                LET'S <br className='xl:block hidden'/> DO IT.
                            </h1>
                        </motion.div>
                        <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                            <p className='max-w-md front-normal text-gray-600 text-base'>
                            Introducing MediaHoch's brand new 3D t-shirt design website
                             - the ultimate tool for creating one-of-a-kind, 
                             eye-catching <strong>Designs that will make you the envy of all 
                             </strong>{" "} your friends.
                            </p>
                            <p className='max-w-md front-normal text-gray-600 text-base'>With our user-friendly interface, you can easily customize every detail of your t-shirt, from the colors and patterns to the placement and sizing of graphics. And the best part? Our advanced 3D rendering technology allows you to see exactly how your design will look on a real t-shirt before you even order it, ensuring that you get exactly what you want.</p>

                            <CustomButton 
                                type="filled"
                                title="Get Started"
                                handleClick={() => state.intro = false}
                                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                            />
                        
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home