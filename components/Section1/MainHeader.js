import styles from '../../styles/Section1/MainHeader.module.css'

const MainHeader = ({ scale }) => {
  return (
    <h1
      className={styles.mainHeader}
      style={{
        fontSize: `${120 * scale}px`,
        top: `${175 * scale}px`,
        lineHeight: `${120 * scale}px`,
      }}
    >
      Išskirtiniam
      <br />
      gyvenimui
    </h1>
  )
}

export default MainHeader
