/* eslint-disable linebreak-style */
import './Header.scss'
import React from 'react'
import { ReactComponent as WhateverIcon } from './search.svg'
import { ReactComponent as WhateverIcon2 } from './cart.svg'

function Header() {
  return (
    <div className="shopify-section-header">
      <div className="page-border" />
      <div className="site-wrapper">
        <div className="top-bar grid">
          <div className="grid__item medium-up--one-fifth small--one-half">
            <div className="top-bar__search">
              <form action="" method="get" className="search-bar small--hide" role="search">
                <button className="search-bar__submit" type="submit">
                  <WhateverIcon />
                </button>
                <input type="search" name="q" className="search-bar__input" placeholder="Search" aria-label="Search" />
              </form>
            </div>
          </div>
          <div className="grid__item medium-up--two-fifths small--hide">
            <span className="customer-links small--hide">
              <a href="" id="customer_login_link">Log in</a>
              <span className="vertical-divider" />
              <a href="" id="customer_register_link">Sign up</a>
            </span>
          </div>
          <div className="grid__item medium-up--two-fifths small--one-half text-right">
            <a href="" className="site-header__cart">
              <WhateverIcon2 />
              <span className="small--hide">
                {' '}
                Cart (
                <span id="CartCoun">0</span>
                )
              </span>
            </a>
            <span className="vertical-divider small--hide" />
            <a href="" className="site-header_cart small--hide"> Check Out</a>
          </div>
        </div>
        <hr className="small--hide hr--border" />
        <header className="site-header grid medium-up--grid--table" role="banner">
          <div className="grid__item small--text-center">
            <div itemScope itemType="http://schema.org/Organization">
              <div id="HeaderLogoWrapper" className="supports-js">
                <a className="arr" href="/" itemProp="url">
                  <img id="HeaderLogo" className="lazyautosizes lazyload" src="//cdn.shopify.com/s/files/1/0002/1915/2443/files/tbib_logo_150x150_99018b68-25df-497a-b5ec-c180a2b20fdf_150x150.png?v=1613528790" data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio data-sizes="auto" alt="The Beast Is Back Inc" itemProp="logo" data-srcset="//cdn.shopify.com/s/files/1/0002/1915/2443/files/tbib_logo_150x150_99018b68-25df-497a-b5ec-c180a2b20fdf_180x.png?v=1613528790 180w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/tbib_logo_150x150_99018b68-25df-497a-b5ec-c180a2b20fdf_360x.png?v=1613528790 360w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/tbib_logo_150x150_99018b68-25df-497a-b5ec-c180a2b20fdf_540x.png?v=1613528790 540w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/tbib_logo_150x150_99018b68-25df-497a-b5ec-c180a2b20fdf_720x.png?v=1613528790 720w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/tbib_logo_150x150_99018b68-25df-497a-b5ec-c180a2b20fdf_900x.png?v=1613528790 900w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/tbib_logo_150x150_99018b68-25df-497a-b5ec-c180a2b20fdf_1080x.png?v=1613528790 1080w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/tbib_logo_150x150_99018b68-25df-497a-b5ec-c180a2b20fdf_1296x.png?v=1613528790 1296w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/tbib_logo_150x150_99018b68-25df-497a-b5ec-c180a2b20fdf_1512x.png?v=1613528790 1512w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/tbib_logo_150x150_99018b68-25df-497a-b5ec-c180a2b20fdf_1728x.png?v=1613528790 1728w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/tbib_logo_150x150_99018b68-25df-497a-b5ec-c180a2b20fdf_2048x.png?v=1613528790 2048w" sizes="150px" />
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Header
