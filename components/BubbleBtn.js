import { useRef, useEffect } from 'react'

import styles from '../styles/BubbleBtn.module.css'

const BubbleBtn = ({ text, pos, scale }) => {
  const rootRef = useRef(null)

  useEffect(() => {
    const oldWidth = parseFloat(rootRef.current.style.width)
    const widthDiff = 180 * scale - oldWidth

    rootRef.current.onmouseenter = () => {
      rootRef.current.style.width = `${180 * scale}px`
      rootRef.current.style.height = `${180 * scale}px`
      rootRef.current.style.top =
        pos.top * scale - widthDiff / 2 + 'px'
      rootRef.current.style.right =
        pos.right * scale - widthDiff / 2 + 'px'
    }
    rootRef.current.onmouseleave = () => {
      rootRef.current.style.width = `${160 * scale}px`
      rootRef.current.style.height = `${160 * scale}px`
      rootRef.current.style.top = pos.top * scale + 'px'
      rootRef.current.style.right = pos.right * scale + 'px'
    }
  }, [scale])

  return (
    <div
      className={styles.root}
      style={{
        top: pos.top * scale,
        right: pos.right * scale,
        width: `${160 * scale}px`,
        height: `${160 * scale}px`,
      }}
      ref={rootRef}
    >
      <p
        className={styles.text}
        style={{ fontSize: `${24 * scale}px` }}
      >
        {text.line1}
      </p>
      <p
        className={styles.text}
        style={{ fontSize: `${24 * scale}px` }}
      >
        {text.line2}
      </p>
    </div>
  )
}

export default BubbleBtn
