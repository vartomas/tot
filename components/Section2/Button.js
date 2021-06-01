import styles from '../../styles/Section2/Button.module.css'

const Button = ({ scale, text, left, top }) => {
  return (
    <div
      className={styles.container}
      style={{ left: `${left * scale}px`, top: `${top * scale}px` }}
    >
      <h3
        className={styles.text}
        style={{
          fontSize: `${24 * scale}px`,
          marginRight: `${12 * scale}px`,
        }}
      >
        {text}
      </h3>
      <svg
        style={{ marginTop: `${6 * scale}px` }}
        xmlns='http://www.w3.org/2000/svg'
        width={`${25.061 * scale}px`}
        viewBox='0 0 25.061 17.06'
      >
        <path
          id='Path_553'
          data-name='Path 553'
          d='M2290.453,2867l8,8-8,8'
          transform='translate(-2274.453 -2866.47)'
          fill='none'
          stroke='#294930'
          strokeWidth='1.5'
        />
        <line
          id='Line_23'
          data-name='Line 23'
          x2='24'
          transform='translate(0 8.53)'
          fill='none'
          stroke='#294930'
          strokeWidth='1.5'
        />
      </svg>
    </div>
  )
}

export default Button
