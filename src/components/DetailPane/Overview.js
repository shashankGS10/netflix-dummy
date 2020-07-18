/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import Button from '../Button'

/**
 * @function Overview
 */
const Overview = () => (
  <div css={OverviewCSS}>
    <p>
      All he wants to do is leave town and start over. But first, he needs to
      deal with his ex, his new roomie and the enemies who want him dead.
    </p>

    <Button icon="play">Play</Button>
  </div>
)

const OverviewCSS = css`
  max-width: 500px;
  color: white;
  padding-top: 0.5vw;

  .Icon {
    margin-right: 10.5px;
  }

  p {
    font-size: 18px;
  }

  button {
    padding: 0.5em 2em;
    font-size: 15px;
  }

  button:first-of-type {
    background: #ff0a16;
  }
`

export default Overview
