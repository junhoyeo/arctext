# arctext
[![NPM version](https://badgen.net/npm/v/@arctext/react)](https://www.npmjs.com/package/@arctext/react)
[![Package size](https://badgen.net/bundlephobia/minzip/@arctext/react)](https://bundlephobia.com/result?p=@arctext/react)

<p align="center">
  <img alt="proof that tony stark has a heart" src="https://github.com/junhoyeo/arctext/raw/main/docs/images/proof-that-tony-stark-has-a-heart.png" width="360px" />
</p>

> 💿 UI component to draw curved text in circles

## 📦 Installation
Currently, this module is only available for React, but I have plans to support all major frontend libraries such as Vue and Svelte.

```bash
# ⎊ Arc Reactor(Cool!)
yarn add @arctext/react
```

## 🚀 Usage

### Basic Usage

<p align="center">
  <img alt="junhoyeo" src="https://github.com/junhoyeo/arctext/raw/main/docs/images/junhoyeo.png" width="264px" />
</p>

```tsx
import { ArcText } from '@arctext/react'

<ArcText text="@junhoyeo" width={500} characterWidth={4.8} />

// You can pass `radius` instead of `width`
<ArcText text="@junhoyeo" radius={250} characterWidth={4.8} />
```

### Upside-down(bottom text)

<p align="center">
  <img alt="junhoyeo upside down" src="https://github.com/junhoyeo/arctext/raw/main/docs/images/junhoyeo-upside-down.png" width="264px" />
</p>

```tsx
<ArcText
  text="@junhoyeo"
  upsideDown
  width={500}
  characterWidth={4.8}
/>
```

### Nested

<p align="center">
  <img alt="proof that tony stark has a heart" src="https://github.com/junhoyeo/arctext/raw/main/docs/images/proof-that-tony-stark-has-a-heart.png" width="264px" />
</p>

```tsx
<ArcText
  text="PROOF THAT TONY STARK"
  characterWidth={6}
  radius={250}
>
  <ArcText
    text="HAS A HEART"
    upsideDown // bottom text
    characterWidth={6}
    radius={250}
  />
</ArcText>
```

### Styling
**Monospaced fonts**—the fonts that have the same width for each character—are recommended here. The result may look awkward with other typefaces.

<p align="center">
  <img alt="junhoyeo styled" src="https://github.com/junhoyeo/arctext/raw/main/docs/images/junhoyeo-styled.png" width="264px" />
</p>

```tsx
import { ArcText } from '@arctext/react'
import styled from 'styled-components'

<Circle text="@junhoyeo" width={500} characterWidth={4.8} />

// Styling is based on `className`
const Circle = styled(ArcText)`
  background-color: white;
  border-width: 50%;

  // Applied to each characters
  & span.character {
    color: black;
    font-size: 37px;
    font-family: monospace;
  }
`
```
