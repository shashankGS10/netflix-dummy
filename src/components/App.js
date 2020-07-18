import React, { useState, useEffect, createRef } from 'react'
import { Global, css } from '@emotion/core'
import Navbar from './Navbar'
import Footer from './Footer'
import Jumbotron from './Jumbotron'
import ContentRow from './ContentRow'
import DetailPane from './DetailPane/DetailPane'

const initialRow = {
  category: '',
  pos: { top: 0, bottom: 0 }
}

const categories = [
  'TV Shows',
  'Action',
  'Drama',
  'Comedy',
  'Documentary',
  'Sci-Fi',
  'Reality'
]

/**
 * @function App
 */
const App = () => {
  const [activeRow, setActiveRow] = useState(initialRow)

  const {
    category,
    pos: { top, bottom }
  } = activeRow

  const navRef = createRef()

  useEffect(() => {
    if (!category) return
    const navHeight = navRef.current.offsetHeight

    window.scrollTo({
      top: top + window.scrollY - navHeight,
      left: 0,
      behavior: 'smooth'
    })
  }, [category])

  const setActive = activeRow => {
    activeRow.category ? setActiveRow(activeRow) : setActiveRow(initialRow)
  }

  return (
    <>
      <Global styles={GlobalCSS} />
      <Navbar ref={navRef} />

      <Jumbotron>
        <ContentRow category={categories[0]} setActive={setActive} />
      </Jumbotron>

      {categories.slice(1).map(category => (
        <ContentRow key={category} category={category} setActive={setActive} />
      ))}

      <DetailPane
        category={category}
        top={bottom + window.scrollY}
        setActive={setActive}
      />
      <Footer />
    </>
  )
}

const GlobalCSS = css`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html,
  body,
  .app {
    margin: 0;
    min-height: 100%;
    width: 100%;
  }

  body {
    background: #151515;
  }

  a {
    text-decoration: none;
    color: white;
  }

  p {
    font-size: 20px;
  }

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }

  button {
    background-color: rgba(51, 51, 51, 0.8);
    border: 1px solid white;
    padding: 0.75em 2.3em;
    border-radius: 0.2vw;
    box-shadow: none;
    font-size: 1.1vw;
    color: white;
    margin-right: 15px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.4px;
  }

  .Icon {
    font-size: 18.5px;
    cursor: pointer;
    color: white;
  }
`

export default App
