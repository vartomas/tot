import styles from '../../styles/Section1/MenuBtn.module.css'

const MenuBtn = ({ scale }) => {
  return (
    <div
      className={styles.root}
      style={{
        top: `${36 * scale}px`,
        right: `${29 * scale}px`,
      }}
    >
      <p
        className={styles.text}
        style={{ fontSize: `${13 * scale}px` }}
      >
        MENIU
      </p>
      <svg
        className={styles.burger}
        style={{
          width: `${36 * scale}px`,
          marginLeft: `${14 * scale}px`,
        }}
        id='ic_burger'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 36 12'
      >
        <path
          id='ic_burger-2'
          data-name='ic_burger'
          d='M-1572,12V10.5h36V12Zm0-10.5V0h36V1.5Z'
          transform='translate(1572)'
          fill='#294930'
        />
      </svg>
    </div>
  )
}

export default MenuBtn
