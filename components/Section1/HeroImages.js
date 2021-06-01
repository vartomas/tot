import Image from 'next/image'

import styles from '../../styles/Section1/HeroImages.module.css'

const HeroImages = ({ scale }) => {
  return (
    <>
      <div
        className={styles.imgContainer}
        style={{
          top: `${328 * scale}px`,
          left: '50%',
          transform: `translateX(${-210 * scale}px)`,
          borderRadius: `${210 * scale}px ${210 * scale}px 0 0`,
        }}
      >
        <Image
          src='/assets/img/heroCenter.jpg'
          width={420 * scale}
          height={520 * scale}
        />
        <div className={styles.filter}></div>
      </div>
      <div
        className={styles.imgContainer}
        style={{
          top: `${648 * scale}px`,
          left: `${-82 * scale}px`,
        }}
      >
        <Image
          src='/assets/img/heroLeft.jpg'
          width={420 * scale}
          height={480 * scale}
        />
      </div>
      <div
        className={styles.imgContainer}
        style={{
          top: `${588 * scale}px`,
          right: `${251 * scale}px`,
        }}
      >
        <Image
          src='/assets/img/heroRight.jpg'
          width={309 * scale}
          height={400 * scale}
        />
      </div>
    </>
  )
}

export default HeroImages
