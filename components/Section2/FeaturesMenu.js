import { useEffect, useRef, useState } from 'react'

import styles from '../../styles/Section2/FeaturesMenu.module.css'

const FeaturesMenu = ({ scale }) => {
  const menuItem1 = useRef(null)
  const menuItem2 = useRef(null)
  const menuItem3 = useRef(null)
  const menuItem4 = useRef(null)
  const menuItem5 = useRef(null)

  const sub1 = useRef(null)
  const sub2 = useRef(null)
  const sub3 = useRef(null)
  const sub4 = useRef(null)
  const sub5 = useRef(null)

  useEffect(() => {
    const menuItems = [
      menuItem1,
      menuItem2,
      menuItem3,
      menuItem4,
      menuItem5,
    ]
    const subTexts = [sub1, sub2, sub3, sub4, sub5]

    menuItems.forEach(e => {
      e.current.onclick = () => {
        menuItems.forEach(e => {
          e.current.style.fontSize = `${38 * scale}px`
          e.current.style.color = '#878282'
        })
        subTexts.forEach(e => {
          e.current.style.position = 'fixed'
          e.current.style.opacity = '0'
        })
        e.current.style.fontSize = `${52 * scale}px`
        e.current.style.color = '#284930'

        const index = menuItems.indexOf(e)
        subTexts[index].current.style.position = 'relative'
        subTexts[index].current.style.opacity = '1'
      }
    })
  }, [scale])

  return (
    <div
      className={styles.container}
      style={{ top: `${3344 * scale}px`, left: `${655 * scale}px` }}
    >
      <h3
        ref={menuItem1}
        className={styles.menuItem}
        style={{
          fontSize: `${38 * scale}px`,
          padding: `${10 * scale}px 0`,
        }}
      >
        - Tinkama erdvė šeimai
      </h3>
      <p
        ref={sub1}
        className={styles.subText}
        style={{
          fontSize: `${15 * scale}px`,
          width: `${420 * scale}px`,
          paddingTop: `${10 * scale}px`,
          paddingLeft: `${35 * scale}px`,
        }}
      >
        Excepteur sint occaecat cupidatat non proidenter culpa
        officiase deserunt mollit. Lorem ipsum dolorsitar ametares
        consectetur adipiscing eiusmod tempor lorem incididunt
        utlabore dolore magna aliqua.
      </p>
      <h3
        ref={menuItem2}
        className={styles.menuItem}
        style={{
          fontSize: `${38 * scale}px`,
          padding: `${10 * scale}px 0`,
        }}
      >
        - Terasos ir balkonai
      </h3>
      <p
        ref={sub2}
        className={styles.subText}
        style={{
          fontSize: `${15 * scale}px`,
          width: `${420 * scale}px`,
          paddingTop: `${10 * scale}px`,
          paddingLeft: `${35 * scale}px`,
        }}
      >
        Excepteur sint occaecat cupidatat non proidenter culpa
        officiase deserunt mollit. Lorem ipsum dolorsitar ametares
        consectetur adipiscing eiusmod tempor lorem incididunt
        utlabore dolore magna aliqua.
      </p>
      <h3
        ref={menuItem3}
        className={styles.menuItem}
        style={{
          fontSize: `${38 * scale}px`,
          padding: `${10 * scale}px 0`,
        }}
      >
        - Klasikinė architektūra
      </h3>
      <p
        ref={sub3}
        className={styles.subText}
        style={{
          fontSize: `${15 * scale}px`,
          width: `${420 * scale}px`,
          paddingTop: `${10 * scale}px`,
          paddingLeft: `${35 * scale}px`,
        }}
      >
        Excepteur sint occaecat cupidatat non proidenter culpa
        officiase deserunt mollit. Lorem ipsum dolorsitar ametares
        consectetur adipiscing eiusmod tempor lorem incididunt
        utlabore dolore magna aliqua.
      </p>
      <h3
        ref={menuItem4}
        className={styles.menuItem}
        style={{
          fontSize: `${38 * scale}px`,
          padding: `${10 * scale}px 0`,
        }}
      >
        - Terasos ir balkonai
      </h3>
      <p
        ref={sub4}
        className={styles.subText}
        style={{
          fontSize: `${15 * scale}px`,
          width: `${420 * scale}px`,
          paddingTop: `${10 * scale}px`,
          paddingLeft: `${35 * scale}px`,
        }}
      >
        Excepteur sint occaecat cupidatat non proidenter culpa
        officiase deserunt mollit. Lorem ipsum dolorsitar ametares
        consectetur adipiscing eiusmod tempor lorem incididunt
        utlabore dolore magna aliqua.
      </p>
      <h3
        ref={menuItem5}
        className={styles.menuItem}
        style={{
          fontSize: `${38 * scale}px`,
          padding: `${10 * scale}px 0`,
        }}
      >
        - Tinkama erdvė šeimai
      </h3>
      <p
        ref={sub5}
        className={styles.subText}
        style={{
          fontSize: `${15 * scale}px`,
          width: `${420 * scale}px`,
          paddingTop: `${10 * scale}px`,
          paddingLeft: `${35 * scale}px`,
        }}
      >
        Excepteur sint occaecat cupidatat non proidenter culpa
        officiase deserunt mollit. Lorem ipsum dolorsitar ametares
        consectetur adipiscing eiusmod tempor lorem incididunt
        utlabore dolore magna aliqua.
      </p>
    </div>
  )
}

export default FeaturesMenu
