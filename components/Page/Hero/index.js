import React, { useRef, useState } from 'react';
import classes from 'classnames'
import styles from './Hero.module.scss'
import IconPlay from './iconPlay.svg'
import IconPause from './iconPause.svg'
import { attributes } from '../../../content/beacon.md'

const hero = ({heading, tagline, media, subheading, description}) => {
  const video = useRef(null)
  const [ pause, setPause ] = useState(false)

  function handlePlay() {
    video.current.paused ? video.current.play() : video.current.pause();
    setPause(!pause)
  }

  return (
    <section className={styles.container}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>{heading}</h1>
        <p>{tagline}</p>
      </div>
      <div className={styles.mediaContainer}>
        <button
          className={styles.playButton}
          onClick={handlePlay}
        >
          <IconPlay className={classes(styles.iconPlay, pause && styles.pause)}/>
          <IconPause className={classes(styles.iconPause, !pause && styles.pause)}/>
          <span>Watch This Video To Learn More</span>
        </button>
        <video ref={video} src={attributes.hero__video}></video>
      </div>
      <div className={styles.subheadingContainer}>
        <h2 className={styles.subheading}>{subheading}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  )
}

export default hero
