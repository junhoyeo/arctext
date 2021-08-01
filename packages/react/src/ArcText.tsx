import React, { useMemo } from 'react'

import { styles } from './styles'

export type ArcTextProps = {
  text: string
  characterWidth: number
  upsideDown?: boolean
} & (
  | {
      radius: number
    }
  | {
      width: number
    }
) &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const ArcText: React.FC<ArcTextProps> = ({
  text,
  characterWidth,
  upsideDown,
  children,
  className,
  ...props
}) => {
  const characters = text.split('')

  const [arc, degree] = useMemo(() => {
    const arc = characters.length * characterWidth
    const degree = arc / characters.length
    return [arc, degree]
  }, [characters.length, characterWidth])

  const radius = 'radius' in props ? props.radius : props.width / 2

  const arcText = useMemo(
    () =>
      characters.map((letter, index) => (
        <span
          key={index}
          className="character"
          style={{
            ...styles.character,
            height: `${radius}px`,
            transform: `rotate(${degree * index - arc / 2}deg)`,
            transformOrigin: `0 ${radius}px 0`,
          }}
        >
          {!upsideDown ? ( //
            letter
          ) : (
            <span className="upside-down" style={styles.upsideDown}>
              {letter}
            </span>
          )}
        </span>
      )),
    [arc, degree, radius],
  )

  return (
    <div
      className={className}
      style={{
        ...styles.container,
        width: radius * 2,
        height: radius * 2,
        transform: !upsideDown ? 'unset' : 'rotateX(180deg)',
      }}
      {...props}
    >
      <div style={styles.absoluteContainer}>
        <span style={styles.text}>{arcText}</span>
      </div>
      {children}
    </div>
  )
}
