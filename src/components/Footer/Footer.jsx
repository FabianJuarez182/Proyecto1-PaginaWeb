/* eslint-disable linebreak-style */
import './Footer.scss'
import React from 'react'
import { ReactComponent as WhateverIcon3 } from './American.svg'
import { ReactComponent as WhateverIcon4 } from './Apple.svg'
import { ReactComponent as WhateverIcon5 } from './Discover.svg'
import { ReactComponent as WhateverIcon6 } from './Meta.svg'
import { ReactComponent as WhateverIcon7 } from './Google.svg'
import { ReactComponent as WhateverIcon8 } from './Mastercard.svg'
import { ReactComponent as WhateverIcon9 } from './Paypal.svg'
import { ReactComponent as WhateverIcon10 } from './Shop.svg'
import { ReactComponent as WhateverIcon11 } from './Venmo.svg'
import { ReactComponent as WhateverIcon12 } from './Visa.svg'

function Footer() {
  return (
    <div id="shopify-section-footer" className="shopify-section">
      <footer className="site-footer" role="contentinfo" data-section-id="footer" data-section-type="footer-section">
        <div className="grid" />
        <div className="grid medium-up--grid--table sub-footer small--text-center">
          <div className="grid__item medium-up--one-half">
            <small>
              Copyright © 2023,
              <a href="/" title>The Beast Is Back Inc</a>
              . &nbsp;
              <a target="_blank" rel="nofollow noreferrer" href="https://www.shopify.com?utm_campaign=poweredby&utm_medium=shopify&utm_source=onlinestore">Powered by Shopify</a>
            </small>
          </div>
          <div className="grid__item medium-up--one-half medium-up--text-right">
            <span className="visually-hidden">Payment icons</span>
            <ul className="list--inline payment-icons">
              <li>
                <WhateverIcon3 />
              </li>
              <li>
                <WhateverIcon4 />
              </li>
              <li>
                <WhateverIcon5 />
              </li>
              <li>
                <WhateverIcon6 />
              </li>
              <li>
                <WhateverIcon7 />
              </li>
              <li>
                <WhateverIcon8 />
              </li>
              <li>
                <WhateverIcon9 />
              </li>
              <li>
                <WhateverIcon10 />
              </li>
              <li>
                <WhateverIcon11 />
              </li>
              <li>
                <WhateverIcon12 />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
