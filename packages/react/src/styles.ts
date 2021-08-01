const container: React.CSSProperties = {
  position: 'relative',

  /* flexbox */
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const absoluteContainer: React.CSSProperties = {
  position: 'absolute',
  top: 0,
}

const text: React.CSSProperties = {
  position: 'relative',
  margin: 0,

  /* Firefox support */
  display: 'block',
}

const character: React.CSSProperties = {
  position: 'absolute',
}

const upsideDown: React.CSSProperties = {
  display: 'inline-block',
  transform: 'rotateX(180deg)',
}

export const styles = {
  container,
  absoluteContainer,
  text,
  character,
  upsideDown,
}
