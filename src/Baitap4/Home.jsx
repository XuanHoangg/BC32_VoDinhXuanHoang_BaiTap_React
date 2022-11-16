import React from 'react'
import styles from './datvephim.module.scss';
import cn from 'classnames'
import DatVe from './DatVe';
const Home = () => {




    return (
        <div>
            <img className={cn(styles.background)} src="./img/bgmovie.jpg" alt="bgmovie" />
            <h1 className={cn(styles.title, 'text-white mt-5 text-center')}>ĐẶT VÉ XEM PHIM CYBERSOFT</h1>
            <DatVe />
        </div>
    )
}

export default Home