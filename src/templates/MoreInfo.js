/**
 * @description Not being used until Part 3
 */

/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import preview from '../img/detail-preview.jpg'
import logo from '../img/featured-logo.png'

const MoreInfo = () => (
  <div
    css={css`
      height: 50vh;
      width: 100%;
      display: flex;
      position: relative;
      .vignette {
        height: inherit;
        width: 40%;
        background: black;
        padding-left: 60px;
        p {
          color: #999;
          font-size: 16px;
        }
        h2 {
          color: white;
        }
      }
      .image {
        height: inherit;
        background-image: url(${preview});
        background-repeat: no-repeat;
        background-size: cover;
        width: 60%;
        position: relative;
        i {
          position: absolute;
          top: 20px;
          right: 20px;
        }
      }
      i {
        color: white;
        cursor: pointer;
      }
      ul {
        position: absolute;
        bottom: 0;
        width: 100%;
        color: white;
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        justify-content: center;
        li {
          font-size: 20px;
          margin-right: 25px;
          border-bottom: 4px solid #e50914;
        }
      }
    `}
  >
    <div className="vignette">
      <img style={{ height: '150px' }} src={logo} />
      <h2>Watch Season 2 Now</h2>
      <p>
        On the planet Latimer, Takeshi Kovacs must protect a tattooist while
        investigating the death of a yakuza boss alongside a no-nonsense CTAC.
      </p>

      <button
        css={css`
          background-color: #e50914;
        `}
      >
        <i className="fa fa-play" aria-hidden="true"></i>Play
      </button>
      <button>
        <i className="fa fa-plus" aria-hidden="true"></i>
        My List
      </button>
      <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
      <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
    </div>
    <div className="image">
      <i className="fa fa-times fa-2x" aria-hidden="true"></i>
    </div>

    <ul>
      <li>Hey</li>
      <li>Hey There</li>
      <li>Hey</li>
      <li>More Like This</li>
      <li>Hey</li>
    </ul>
  </div>
)

export default MoreInfo
