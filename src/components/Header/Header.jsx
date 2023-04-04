/* eslint-disable linebreak-style */

import './Header.scss'
import React from 'react'

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
                  <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-search" viewBox="0 0 20 20">
                    <path fill="#444" d="M18.64 17.02l-5.31-5.31c.81-1.08 1.26-2.43 1.26-3.87C14.5 4.06 11.44 1 7.75 1S1 4.06 1 7.75s3.06 6.75 6.75 6.75c1.44 0 2.79-.45 3.87-1.26l5.31 5.31c.45.45 1.26.54 1.71.09.45-.36.45-1.17 0-1.62zM3.25 7.75c0-2.52 1.98-4.5 4.5-4.5s4.5 1.98 4.5 4.5-1.98 4.5-4.5 4.5-4.5-1.98-4.5-4.5z" />
                  </svg>
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
              <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-search" viewBox="0 0 20 20">
                <path fill="#444" d="M18.936 5.564c-.144-.175-.35-.207-.55-.207h-.003L6.774 4.286c-.272 0-.417.089-.491.18-.079.096-.16.263-.094.585l2.016 5.705c.163.407.642.673 1.068.673h8.401c.433 0 .854-.285.941-.725l.484-4.571c.045-.221-.015-.388-.163-.567z" />
                <path fill="#444" d="M17.107 12.5H7.659L4.98 4.117l-.362-1.059c-.138-.401-.292-.559-.695-.559H.924c-.411 0-.748.303-.748.714s.337.714.748.714h2.413l3.002 9.48c.126.38.295.52.942.52h9.825c.411 0 .748-.303.748-.714s-.336-.714-.748-.714zM10.424 16.23a1.498 1.498 0 1 1-2.997 0 1.498 1.498 0 0 1 2.997 0zM16.853 16.23a1.498 1.498 0 1 1-2.997 0 1.498 1.498 0 0 1 2.997 0z" />
              </svg>
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
