import styles from '../../styles/Section1/HeroText.module.css'

const HeroText = ({ scale }) => {
  return (
    <>
      <p
        className={styles.text}
        style={{
          fontSize: `${15 * scale}px`,
          width: `${198 * scale}px`,
          height: `${140 * scale}px`,
          top: `${448 * scale}px`,
          left: `${140 * scale}px`,
        }}
      >
        Naujas gyvenamųjų namų kompleksas Totorių Sodas kuriasi
        ramioje Senamiesčio dalyje. Klasikinė pastatų architektūra
        leidžia atsipalaiduoti ir užsiimti mėgiama veikla.
      </p>
      <p
        className={styles.text}
        style={{
          fontSize: `${15 * scale}px`,
          width: `${198 * scale}px`,
          height: `${280 * scale}px`,
          top: `${928 * scale}px`,
          left: `${473 * scale}px`,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
        eiusmod tempor incididunt ut labore dolore magna aliqua. Duis
        aute irure dolor in reprehenderit in voluptate velit. <br />
        <br />
        Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </p>
    </>
  )
}

export default HeroText
