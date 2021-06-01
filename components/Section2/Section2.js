import Image from 'next/image'
import styles from '../../styles/Section2/Section2.module.css'

// components
import Button from './Button'
import CenterPancake from './CenterPancake'
import FeaturesMenu from './FeaturesMenu'

const Section2 = ({ scale }) => {
  return (
    <div
      className={styles.container}
      style={{
        height: `${3973 * scale}px`,
        marginTop: `${160 * scale}px`,
      }}
    >
      <div
        className={styles.gradientTop}
        style={{
          top: `${-210 * scale}px`,
          height: `${768 * scale}px`,
        }}
      ></div>
      <div
        className={styles.gradientMiddle}
        style={{
          top: `${(768 - 210) * scale}px`,
          height: `${3038 * scale}px`,
        }}
      ></div>
      <div
        className={styles.gradientBottom}
        style={{
          top: `${(768 - 210 + 3038) * scale}px`,
          height: `${768 * scale}px`,
        }}
      ></div>
      <h2
        className={styles.header2}
        style={{
          fontSize: `${100 * scale}px`,
          left: `${140 * scale}px`,
          lineHeight: `${100 * scale}px`,
          top: `${-20 * scale}px`,
        }}
      >
        Viskas,
        <br /> ko reikia
      </h2>
      <p
        className={styles.paragraph}
        style={{
          fontSize: `${15 * scale}px`,
          top: `${228 * scale}px`,
          left: `${362 * scale}px`,
          width: `${198 * scale}px`,
        }}
      >
        Kad ir koks jūsų gyvenimo ritmas, namuose visiems norisi
        ramybės ir saugumo. Geras jausmas, kai galite visiškai
        atsipalaiduoti: balkonai ir terasos sukurti mėgautis
        privatumu.
      </p>
      <p
        className={styles.paragraph}
        style={{
          fontSize: `${15 * scale}px`,
          top: `${228 * scale}px`,
          left: `${140 * scale}px`,
          width: `${198 * scale}px`,
        }}
      >
        Automobiliui – vieta požeminėje aikštelėje, o pažįstantis
        durininkas pasitinka ne tik svečius, bet ir saugiai priima
        visus jūsų siuntinius lorem ipsum sitamet doloresanta.
      </p>
      <div className={styles.imageContainer} style={{ right: '0' }}>
        <Image
          src='/assets/img/section2Headerimg.jpg'
          width={560 * scale}
          height={768 * scale}
        />
      </div>
      <Button
        scale={scale}
        text={'Apie projektą'}
        left={140}
        top={409}
      />
      <h2
        className={styles.header2}
        style={{
          fontSize: `${100 * scale}px`,
          left: `${323 * scale}px`,
          lineHeight: `${100 * scale}px`,
          top: `${575 * scale}px`,
          textAlign: 'right',
        }}
      >
        Jūsų <br /> ramybei
      </h2>
      <div
        className={styles.imageContainer}
        style={{
          top: `${928 * scale}px`,
          width: `100%`,
          height: `${768 * scale}px`,
        }}
      >
        <CenterPancake scale={scale} />
        <Image src='/assets/img/section2second.jpg' layout='fill' />
      </div>
      <h2
        className={styles.header2}
        style={{
          fontSize: `${100 * scale}px`,
          top: `${1787 * scale}px`,
          left: `${403 * scale}px`,
          width: `${447 * scale}px`,
        }}
      >
        1500Kv.M
      </h2>
      <h2
        className={styles.header2}
        style={{
          fontSize: `${100 * scale}px`,
          top: `${1911 * scale}px`,
          left: `${140 * scale}px`,
          width: `${354 * scale}px`,
        }}
      >
        40Kv.M
      </h2>
      <h2
        className={styles.header2}
        style={{
          fontSize: `${100 * scale}px`,
          top: `${1911 * scale}px`,
          left: `${664 * scale}px`,
          width: `${148 * scale}px`,
        }}
      >
        120
      </h2>
      <h2
        className={styles.header2}
        style={{
          fontSize: `${100 * scale}px`,
          top: `${1911 * scale}px`,
          left: `${1003 * scale}px`,
          width: `${93 * scale}px`,
        }}
      >
        15
      </h2>
      <p
        className={styles.paragraph2}
        style={{
          fontSize: `${13 * scale}px`,
          top: `${1820 * scale}px`,
          left: `${840 * scale}px`,
          width: `${97 * scale}px`,
        }}
      >
        Excepteuras occaecat
      </p>
      <p
        className={styles.paragraph2}
        style={{
          fontSize: `${13 * scale}px`,
          top: `${1944 * scale}px`,
          left: `${490 * scale}px`,
          width: `${94 * scale}px`,
        }}
      >
        Lorem ipsum doloramet
      </p>
      <p
        className={styles.paragraph2}
        style={{
          fontSize: `${13 * scale}px`,
          top: `${1944 * scale}px`,
          left: `${828 * scale}px`,
          width: `${115 * scale}px`,
        }}
      >
        Duis aute irure reprehenderit in voluptate
      </p>
      <p
        className={styles.paragraph2}
        style={{
          fontSize: `${13 * scale}px`,
          top: `${1944 * scale}px`,
          left: `${1112 * scale}px`,
          width: `${116 * scale}px`,
        }}
      >
        tempor labore ut incididunt
      </p>
      <p
        className={styles.paragraph}
        style={{
          fontSize: `${15 * scale}px`,
          top: `${2160 * scale}px`,
          left: `${140 * scale}px`,
          width: `${198 * scale}px`,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
        eiusmod tempor incididunt ut labore dolore magna aliqua. Duis
        aute irure dolor in reprehenderit in voluptate velit loremas.
        Excepteur sint occaecat cupidatat non proidenter sunt in culpa
        qui officiase deserunt mollit laborum eiusmod temp incididunt.
      </p>
      <p
        className={styles.paragraph}
        style={{
          fontSize: `${15 * scale}px`,
          top: `${2160 * scale}px`,
          left: `${362 * scale}px`,
          width: `${198 * scale}px`,
        }}
      >
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id laborum eiusmod tempor. Lorem ipsum
        dolor sit amet consectetur adipiscing elsed eiusmod tempor
        incididunt. ut labore dolore magna aliqua. Duis aute irure
        dolor in reprehenderit in voluptate velit loremas. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id laborum eiusmod tempor
        incididunt.
      </p>
      <div
        className={styles.imageContainer}
        style={{
          top: `${2220 * scale}px`,
          left: `${584 * scale}px`,
        }}
      >
        <Image
          src='/assets/img/heroCenter.jpg'
          width={420 * scale}
          height={520 * scale}
        />
      </div>
      <div
        className={styles.imageContainer}
        style={{
          top: `${2160 * scale}px`,
          right: `${0 * scale}px`,
        }}
      >
        <Image
          src='/assets/img/section2interior1.jpg'
          width={320 * scale}
          height={480 * scale}
        />
      </div>
      <p
        className={styles.paragraph2}
        style={{
          fontSize: `${13 * scale}px`,
          top: `${2860 * scale}px`,
          left: `${140 * scale}px`,
          width: `${102 * scale}px`,
        }}
      >
        {'Išskirtinumai'.toUpperCase()}
      </p>
      <h2
        className={styles.header2}
        style={{
          fontSize: `${100 * scale}px`,
          top: `${2925 * scale}px`,
          left: `${140 * scale}px`,
          width: `${753 * scale}px`,
        }}
      >
        Erdvūs butai <br />
        jau laukia Jūsų!
      </h2>
      <div
        className={styles.imageContainer}
        style={{
          top: `${3255 * scale}px`,
          left: `0px`,
        }}
      >
        <Image
          src='/assets/img/section2interior2.jpg'
          width={560 * scale}
          height={768 * scale}
        />
      </div>
      <FeaturesMenu scale={scale} />
      <p
        className={styles.paragraph2}
        style={{
          fontSize: `${13 * scale}px`,
          top: `${4373 * scale}px`,
          left: `${652 * scale}px`,
          width: `${62 * scale}px`,
        }}
      >
        {'Istorija'.toUpperCase()}
      </p>
      <h2
        className={styles.header2}
        style={{
          fontSize: `${100 * scale}px`,
          top: `${4409 * scale}px`,
          left: `${525 * scale}px`,
          width: `${316 * scale}px`,
        }}
      >
        1824m.
      </h2>
    </div>
  )
}

export default Section2
