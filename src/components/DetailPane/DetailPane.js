/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { css, jsx } from '@emotion/core'
import DetailPaneNav from './DetailPaneNav'
import Overview from './Overview'
import Episodes from './Episodes'
import Details from './Details'
import Icon from '../Icon'
import logo from '../../img/logo.png'

const TABS = ['Overview', 'Episodes', 'Details']

/**
 * @function DetailPane
 */
const DetailPane = ({ category, top, setActive }) => {
  const [tab, setTab] = useState()

  useEffect(() => {
    setTab(TABS[0])
  }, [!category])

  return (
    category && (
      <div
        css={[
          DetailPaneCSS,
          css`
            top: ${top}px;
          `
        ]}
      >
        <div className="pane-wrapper">
          <img
            css={css`
              max-width: ${tab === 'Overview' ? 375 : 175}px;
            `}
            src={logo}
          />

          {(() => {
            switch (tab) {
              case 'Details':
                return <Details />
              case 'Episodes':
                return <Episodes />
              default:
                return <Overview />
            }
          })()}
        </div>

        <Icon type="times" onClick={setActive} />
        <DetailPaneNav tab={tab} tabs={TABS} setTab={setTab} />
      </div>
    )
  )
}

const DetailPaneCSS = css`
  height: 475px;
  background: black;
  width: 100%;
  position: absolute;
  border: 2px solid white;
  z-index: 99;
  color: white;

  .Icon.times {
    font-size: 32px;
    color: white;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }

  h1 {
    margin-top: 0;
  }

  .pane-wrapper {
    padding: 2vw 4vw 0;

    img {
      margin-bottom: 20px;
    }
  }
`

export default DetailPane
