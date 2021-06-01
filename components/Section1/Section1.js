import styles from '../../styles/Section1/Section1.module.css'

// components
import MenuBtn from './MenuBtn'
import MainLogo from './MainLogo'
import BubbleBtn from '../BubbleBtn'
import MainHeader from './MainHeader'
import HeroImages from './HeroImages'
import HeroText from './HeroText'

const Section1 = ({ scale }) => {
  return (
    <div
      className={styles.heroContainer}
      style={{ height: `${1208 * scale}px` }}
    >
      <MenuBtn scale={scale} />
      <MainLogo scale={scale} />
      <MainHeader scale={scale} />
      <BubbleBtn
        text={{ line1: 'Rinktis', line2: 'butą' }}
        pos={{ top: 472, right: 29 }}
        scale={scale}
      />
      <HeroImages scale={scale} />
      <HeroText scale={scale} />
    </div>
  )
}

export default Section1
