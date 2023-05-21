/* eslint-disable linebreak-style */

import './Grid.scss'
import React from 'react'

function Grid() {
  return (
    <div className="site-wrapper">
      <div className="grid">
        <div id="shopify-section-sidebar" className="shopify-section">
          <div data-section-id="sidebar" data-section-type="sidebar-section">
            <nav className="grid__item small--text-center medium-up--one-fifth" role="navigation">
              <div id="SiteNav" className="site-nav" role="menu">
                <ul className="list--nav">
                  <li className="site-nav__item site-nav--active">
                    <a href="/" className="site-nav__link" aria-current="page">Home</a>
                  </li>
                  <li className="site-nav__item">
                    <a href="/" className="site-nav__link">Screen Prints</a>
                  </li>
                  <li className="site-nav__item">
                    <a href="/" className="site-nav__link">Archival Prints</a>
                  </li>
                  <li className="site-nav__item">
                    <a href="/" className="site-nav__link">Objects</a>
                  </li>
                  <li className="site-nav__item">
                    <a href="/" className="site-nav__link">Patches</a>
                  </li>
                  <li className="site-nav__item">
                    <a href="/" className="site-nav__link">Posters</a>
                  </li>
                  <li className="site-nav__item">
                    <a href="/" className="site-nav__link">Stickers</a>
                  </li>
                  <li className="site-nav__item">
                    <a href="/" className="site-nav__link">All Prints</a>
                  </li>
                  <li className="site-nav__item">
                    <a href="/" className="site-nav__link">All Products</a>
                  </li>
                  <li className="site-nav__item">
                    <a href="/" className="site-nav__link">Conctact</a>
                  </li>
                </ul>
                <ul className="list--inline social-links">
                  <li>
                    <a href="/" title="The Beast Is Back Inc on Twitter">
                      <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-twitter" viewBox="0 0 20 20">
                        <path fill="#444" d="M19.551 4.208q-.815 1.202-1.956 2.038 0 .082.02.255t.02.255q0 1.589-.469 3.179t-1.426 3.036-2.272 2.567-3.158 1.793-3.963.672q-3.301 0-6.031-1.773.571.041.937.041 2.751 0 4.911-1.671-1.284-.02-2.292-.784T2.456 11.85q.346.082.754.082.55 0 1.039-.163-1.365-.285-2.262-1.365T1.09 7.918v-.041q.774.408 1.773.448-.795-.53-1.263-1.396t-.469-1.864q0-1.019.509-1.997 1.487 1.854 3.596 2.924T9.81 7.184q-.143-.509-.143-.897 0-1.63 1.161-2.781t2.832-1.151q.815 0 1.569.326t1.284.917q1.345-.265 2.506-.958-.428 1.386-1.732 2.18 1.243-.163 2.262-.611z" />
                      </svg>
                      <span className="icon__fallback-text">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="/" title="The Beast Is Back Inc on Twitter">
                      <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-instagram" viewBox="0 0 512 512">
                        <path d="M256 49.5c67.3 0 75.2.3 101.8 1.5 24.6 1.1 37.9 5.2 46.8 8.7 11.8 4.6 20.2 10 29 18.8s14.3 17.2 18.8 29c3.4 8.9 7.6 22.2 8.7 46.8 1.2 26.6 1.5 34.5 1.5 101.8s-.3 75.2-1.5 101.8c-1.1 24.6-5.2 37.9-8.7 46.8-4.6 11.8-10 20.2-18.8 29s-17.2 14.3-29 18.8c-8.9 3.4-22.2 7.6-46.8 8.7-26.6 1.2-34.5 1.5-101.8 1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2 1.5-101.8c1.1-24.6 5.2-37.9 8.7-46.8 4.6-11.8 10-20.2 18.8-29s17.2-14.3 29-18.8c8.9-3.4 22.2-7.6 46.8-8.7 26.6-1.3 34.5-1.5 101.8-1.5m0-45.4c-68.4 0-77 .3-103.9 1.5C125.3 6.8 107 11.1 91 17.3c-16.6 6.4-30.6 15.1-44.6 29.1-14 14-22.6 28.1-29.1 44.6-6.2 16-10.5 34.3-11.7 61.2C4.4 179 4.1 187.6 4.1 256s.3 77 1.5 103.9c1.2 26.8 5.5 45.1 11.7 61.2 6.4 16.6 15.1 30.6 29.1 44.6 14 14 28.1 22.6 44.6 29.1 16 6.2 34.3 10.5 61.2 11.7 26.9 1.2 35.4 1.5 103.9 1.5s77-.3 103.9-1.5c26.8-1.2 45.1-5.5 61.2-11.7 16.6-6.4 30.6-15.1 44.6-29.1 14-14 22.6-28.1 29.1-44.6 6.2-16 10.5-34.3 11.7-61.2 1.2-26.9 1.5-35.4 1.5-103.9s-.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2-6.4-16.6-15.1-30.6-29.1-44.6-14-14-28.1-22.6-44.6-29.1-16-6.2-34.3-10.5-61.2-11.7-27-1.1-35.6-1.4-104-1.4z" />
                        <path d="M256 126.6c-71.4 0-129.4 57.9-129.4 129.4s58 129.4 129.4 129.4 129.4-58 129.4-129.4-58-129.4-129.4-129.4zm0 213.4c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84z" />
                        <circle cx="390.5" cy="121.5" r="30.2" />
                      </svg>
                      <span className="icon__fallback-text">Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="medium-up--hide hr--small hr--border-bottom" />
            </nav>
          </div>
        </div>
        <main className="main-content grid__item medium-up--four-fifths" id="MainContent" role="main">
          <div className="index-sections">
            <div id="shopify-section-16233841326b63ff8c" className="shopify-section">
              <div className="grid banner-wrapper">
                <div className="grid__item banner slide-up-animation animated">
                  <div className="supports-js">
                    <div className="banner__image-wrapper">
                      <img className="banner__image lazyautosizes lazyloaded" src="//cdn.shopify.com/s/files/1/0002/1915/2443/files/JR-Shopify-Header-970x460_300x300.jpg?v=1623384730" data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="2.108695652173913" data-sizes="auto" alt="The Beast Is Back Inc" itemProp="image" data-srcset="//cdn.shopify.com/s/files/1/0002/1915/2443/files/JR-Shopify-Header-970x460_180x.jpg?v=1623384730 180w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/JR-Shopify-Header-970x460_360x.jpg?v=1623384730 360w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/JR-Shopify-Header-970x460_540x.jpg?v=1623384730 540w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/JR-Shopify-Header-970x460_720x.jpg?v=1623384730 720w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/JR-Shopify-Header-970x460_900x.jpg?v=1623384730 900w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/JR-Shopify-Header-970x460_1080x.jpg?v=1623384730 1080w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/JR-Shopify-Header-970x460_1296x.jpg?v=1623384730 1296w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/JR-Shopify-Header-970x460_1512x.jpg?v=1623384730 1512w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/JR-Shopify-Header-970x460_1728x.jpg?v=1623384730 1728w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/JR-Shopify-Header-970x460_2048x.jpg?v=1623384730 2048w" srcSet="//cdn.shopify.com/s/files/1/0002/1915/2443/files/JR-Shopify-Header-970x460_180x.jpg?v=1623384730 180w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/JR-Shopify-Header-970x460_360x.jpg?v=1623384730 360w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/JR-Shopify-Header-970x460_540x.jpg?v=1623384730 540w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/JR-Shopify-Header-970x460_720x.jpg?v=1623384730 720w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/JR-Shopify-Header-970x460_900x.jpg?v=1623384730 900w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/JR-Shopify-Header-970x460_1080x.jpg?v=1623384730 1080w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/JR-Shopify-Header-970x460_1296x.jpg?v=1623384730 1296w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/JR-Shopify-Header-970x460_1512x.jpg?v=1623384730 1512w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/JR-Shopify-Header-970x460_1728x.jpg?v=1623384730 1728w, //cdn.shopify.com/s/files/1/0002/1915/2443/files/JR-Shopify-Header-970x460_2048x.jpg?v=1623384730 2048w" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="shopify-section-featured-products" className="shopify-section">
              <hr className="medium-up--hide hr--clear hr--small" />
              <div className="featured-products">
                <h2 className="small--text-center">New Stuff</h2>
                <div className="grid grid--uniform" role="list">
                  <div className="product grid__item medium-up--one-third small--one-half slide-up-animation animated" role="listitem">
                    <div className="supports-js-a">
                      <a href="/products/draw-typewriter-screen-print" className="product__image-wrapper" title="draw (Typewriter) - Screen Print">
                        <img className="product__image lazyautosizes lazyloaded" src="//cdn.shopify.com/s/files/1/0002/1915/2443/products/typewriter-draw-1_150x150.png?v=1677088806" data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0" data-sizes="auto" alt="draw (Typewriter) - Screen Print" data-srcset="//cdn.shopify.com/s/files/1/0002/1915/2443/products/typewriter-draw-1_180x.png?v=1677088806 180w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/typewriter-draw-1_360x.png?v=1677088806 360w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/typewriter-draw-1_540x.png?v=1677088806 540w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/typewriter-draw-1_720x.png?v=1677088806 720w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/typewriter-draw-1_900x.png?v=1677088806 900w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/typewriter-draw-1_1080x.png?v=1677088806 1080w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/typewriter-draw-1_1296x.png?v=1677088806 1296w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/typewriter-draw-1_1512x.png?v=1677088806 1512w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/typewriter-draw-1_1728x.png?v=1677088806 1728w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/typewriter-draw-1_2048x.png?v=1677088806 2048w" sizes="290px" srcSet="//cdn.shopify.com/s/files/1/0002/1915/2443/products/typewriter-draw-1_180x.png?v=1677088806 180w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/typewriter-draw-1_360x.png?v=1677088806 360w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/typewriter-draw-1_540x.png?v=1677088806 540w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/typewriter-draw-1_720x.png?v=1677088806 720w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/typewriter-draw-1_900x.png?v=1677088806 900w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/typewriter-draw-1_1080x.png?v=1677088806 1080w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/typewriter-draw-1_1296x.png?v=1677088806 1296w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/typewriter-draw-1_1512x.png?v=1677088806 1512w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/typewriter-draw-1_1728x.png?v=1677088806 1728w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/typewriter-draw-1_2048x.png?v=1677088806 2048w" />
                      </a>
                    </div>
                    <div className="product__title text-center">
                      <a href="/products/draw-typewriter-screen-print">draw (Typewriter) - Screen Print</a>
                    </div>
                    <div className="product__prices text-center">
                      <span className="product__price">
                        <span className="visually-hidden">Regular price</span>
                        $15.00
                      </span>
                    </div>
                  </div>
                  <div className="product grid__item medium-up--one-third small--one-half slide-up-animation animated" role="listitem">
                    <div className="supports-js-a">
                      <a href="/products/sky-king-pterantor-magma-soft-vinyl-toy" className="product__image-wrapper" title="Sky King Pterantor – Magma - Soft Vinyl Toy">
                        <img className="product__image lazyautosizes lazyloaded" src="//cdn.shopify.com/s/files/1/0002/1915/2443/products/magma-01_150x150.jpg?v=1670270511" data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0" data-sizes="auto" alt="Sky King Pterantor – Magma - Soft Vinyl Toy" data-srcset="//cdn.shopify.com/s/files/1/0002/1915/2443/products/magma-01_180x.jpg?v=1670270511 180w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/magma-01_360x.jpg?v=1670270511 360w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/magma-01_540x.jpg?v=1670270511 540w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/magma-01_720x.jpg?v=1670270511 720w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/magma-01_900x.jpg?v=1670270511 900w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/magma-01_1080x.jpg?v=1670270511 1080w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/magma-01_1296x.jpg?v=1670270511 1296w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/magma-01_1512x.jpg?v=1670270511 1512w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/magma-01_1728x.jpg?v=1670270511 1728w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/magma-01_2048x.jpg?v=1670270511 2048w" sizes="303px" srcSet="//cdn.shopify.com/s/files/1/0002/1915/2443/products/magma-01_180x.jpg?v=1670270511 180w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/magma-01_360x.jpg?v=1670270511 360w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/magma-01_540x.jpg?v=1670270511 540w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/magma-01_720x.jpg?v=1670270511 720w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/magma-01_900x.jpg?v=1670270511 900w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/magma-01_1080x.jpg?v=1670270511 1080w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/magma-01_1296x.jpg?v=1670270511 1296w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/magma-01_1512x.jpg?v=1670270511 1512w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/magma-01_1728x.jpg?v=1670270511 1728w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/magma-01_2048x.jpg?v=1670270511 2048w" />
                      </a>
                    </div>
                    <div className="product__title text-center">
                      <a href="/products/sky-king-pterantor-magma-soft-vinyl-toy">Sky King Pterantor – Magma - Soft Vinyl Toy</a>
                    </div>
                    <div className="product__prices text-center">
                      <span className="product__price">
                        <span className="visually-hidden">Regular price</span>
                        $100.00 &nbsp;
                      </span>
                      —
                      <strong className="sold-out-text"> Sold Out</strong>
                    </div>
                  </div>
                  <div className="product grid__item medium-up--one-third small--one-half slide-up-animation animated" role="listitem">
                    <div className="supports-js-a">
                      <a href="/products/joy-riders-nebula-one-deluxe-set" className="product__image-wrapper" title="Joy Riders – Nebula One Deluxe Set">
                        <img className="product__image lazyautosizes lazyloaded" data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0" data-sizes="auto" alt="Joy Riders – Nebula One Deluxe Set" data-srcset="//cdn.shopify.com/s/files/1/0002/1915/2443/products/JR-Boxed-Shopify-03_180x.jpg?v=1622589496 180w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/JR-Boxed-Shopify-03_360x.jpg?v=1622589496 360w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/JR-Boxed-Shopify-03_540x.jpg?v=1622589496 540w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/JR-Boxed-Shopify-03_720x.jpg?v=1622589496 720w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/JR-Boxed-Shopify-03_900x.jpg?v=1622589496 900w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/JR-Boxed-Shopify-03_1080x.jpg?v=1622589496 1080w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/JR-Boxed-Shopify-03_1296x.jpg?v=1622589496 1296w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/JR-Boxed-Shopify-03_1512x.jpg?v=1622589496 1512w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/JR-Boxed-Shopify-03_1728x.jpg?v=1622589496 1728w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/JR-Boxed-Shopify-03_2048x.jpg?v=1622589496 2048w" sizes="303px" srcSet="//cdn.shopify.com/s/files/1/0002/1915/2443/products/JR-Boxed-Shopify-03_180x.jpg?v=1622589496 180w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/JR-Boxed-Shopify-03_360x.jpg?v=1622589496 360w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/JR-Boxed-Shopify-03_540x.jpg?v=1622589496 540w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/JR-Boxed-Shopify-03_720x.jpg?v=1622589496 720w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/JR-Boxed-Shopify-03_900x.jpg?v=1622589496 900w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/JR-Boxed-Shopify-03_1080x.jpg?v=1622589496 1080w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/JR-Boxed-Shopify-03_1296x.jpg?v=1622589496 1296w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/JR-Boxed-Shopify-03_1512x.jpg?v=1622589496 1512w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/JR-Boxed-Shopify-03_1728x.jpg?v=1622589496 1728w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/JR-Boxed-Shopify-03_2048x.jpg?v=1622589496 2048w" />
                      </a>
                    </div>
                    <div className="product__title text-center">
                      <a href="/products/joy-riders-nebula-one-deluxe-set">Joy Riders – Nebula One Deluxe Set</a>
                    </div>
                    <div className="product__prices text-center">
                      <span className="product__price--on-sale">
                        <strong className="visually-hidden">Sale price</strong>
                        $75.00
                      </span>
                      <span className="visually-hidden">Regular price</span>
                      <s>$95.00</s>
                      <span className="badge badge--sale">
                        <span>Sale</span>
                      </span>
                    </div>
                  </div>
                  <div className="product grid__item medium-up--one-third small--one-half slide-up-animation animated" role="listitem">
                    <div className="supports-js-b">
                      <a href="/products/tmnt-action-figure-compendium" className="product__image-wrapper-a" title="TMNT Action Figure Compendium (2020)">
                        <img className="product__image lazyautosizes lazyloaded" src="//cdn.shopify.com/s/files/1/0002/1915/2443/products/tmnt-compendium-02_150x150.png?v=1602824943" data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="0.6693333333333333" data-sizes="auto" alt="TMNT Action Figure Compendium (2020)" data-srcset="//cdn.shopify.com/s/files/1/0002/1915/2443/products/tmnt-compendium-02_180x.png?v=1602824943 180w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/tmnt-compendium-02_360x.png?v=1602824943 360w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/tmnt-compendium-02_540x.png?v=1602824943 540w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/tmnt-compendium-02_720x.png?v=1602824943 720w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/tmnt-compendium-02_900x.png?v=1602824943 900w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/tmnt-compendium-02_1080x.png?v=1602824943 1080w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/tmnt-compendium-02_1296x.png?v=1602824943 1296w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/tmnt-compendium-02_1512x.png?v=1602824943 1512w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/tmnt-compendium-02_1728x.png?v=1602824943 1728w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/tmnt-compendium-02_2048x.png?v=1602824943 2048w" sizes="303px" srcSet="//cdn.shopify.com/s/files/1/0002/1915/2443/products/tmnt-compendium-02_180x.png?v=1602824943 180w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/tmnt-compendium-02_360x.png?v=1602824943 360w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/tmnt-compendium-02_540x.png?v=1602824943 540w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/tmnt-compendium-02_720x.png?v=1602824943 720w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/tmnt-compendium-02_900x.png?v=1602824943 900w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/tmnt-compendium-02_1080x.png?v=1602824943 1080w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/tmnt-compendium-02_1296x.png?v=1602824943 1296w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/tmnt-compendium-02_1512x.png?v=1602824943 1512w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/tmnt-compendium-02_1728x.png?v=1602824943 1728w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/tmnt-compendium-02_2048x.png?v=1602824943 2048w" />
                      </a>
                    </div>
                    <div className="product__title text-center">
                      <a href="/products/tmnt-action-figure-compendium">TMNT Action Figure Compendium (2020)</a>
                    </div>
                    <div className="product__prices text-center">
                      <span className="product__price--on-sale">
                        <strong className="visually-hidden">Sale price</strong>
                        $20.00
                      </span>
                      <span className="visually-hidden">Regular price</span>
                      <s>$30.00</s>
                      <span className="badge badge--sale">
                        <span>Sale</span>
                      </span>
                    </div>
                  </div>
                  <div className="product grid__item medium-up--one-third small--one-half slide-up-animation animated" role="listitem">
                    <div className="supports-js-a">
                      <a href="/products/draw-shop-sign-screen-print" className="product__image-wrapper" title="DRAW shop sign - Screen Print">
                        <img className="product__image lazyautosizes lazyloaded" src="//cdn.shopify.com/s/files/1/0002/1915/2443/products/Draw-01_150x150.png?v=1603134657" data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0" data-sizes="auto" alt="DRAW shop sign - Screen Print" data-srcset="//cdn.shopify.com/s/files/1/0002/1915/2443/products/Draw-01_180x.png?v=1603134657 180w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/Draw-01_360x.png?v=1603134657 360w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/Draw-01_540x.png?v=1603134657 540w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/Draw-01_720x.png?v=1603134657 720w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/Draw-01_900x.png?v=1603134657 900w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/Draw-01_1080x.png?v=1603134657 1080w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/Draw-01_1296x.png?v=1603134657 1296w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/Draw-01_1512x.png?v=1603134657 1512w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/Draw-01_1728x.png?v=1603134657 1728w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/Draw-01_2048x.png?v=1603134657 2048w" sizes="303px" srcSet="//cdn.shopify.com/s/files/1/0002/1915/2443/products/Draw-01_180x.png?v=1603134657 180w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/Draw-01_360x.png?v=1603134657 360w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/Draw-01_540x.png?v=1603134657 540w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/Draw-01_720x.png?v=1603134657 720w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/Draw-01_900x.png?v=1603134657 900w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/Draw-01_1080x.png?v=1603134657 1080w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/Draw-01_1296x.png?v=1603134657 1296w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/Draw-01_1512x.png?v=1603134657 1512w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/Draw-01_1728x.png?v=1603134657 1728w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/Draw-01_2048x.png?v=1603134657 2048w" />
                      </a>
                    </div>
                    <div className="product__title text-center">
                      <a href="/products/draw-shop-sign-screen-print">DRAW shop sign - Screen Print</a>
                    </div>
                    <div className="product__prices text-center">
                      <span className="product__price">
                        <span className="visually-hidden">Regular price</span>
                        $10.00
                      </span>
                    </div>
                  </div>
                  <div className="product grid__item medium-up--one-third small--one-half slide-up-animation animated" role="listitem">
                    <div className="supports-js-a">
                      <a href="/products/mini-screen-prints-set-3" className="product__image-wrapper" title="Mini Screen Prints SET 3">
                        <img className="product__image lazyautosizes lazyloaded" src="//cdn.shopify.com/s/files/1/0002/1915/2443/products/miniscreenprints2019-1024x1024_150x150.png?v=1573347020" data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0" data-sizes="auto" alt="Mini Screen Prints SET 3" data-srcset="//cdn.shopify.com/s/files/1/0002/1915/2443/products/miniscreenprints2019-1024x1024_180x.png?v=1573347020 180w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/miniscreenprints2019-1024x1024_360x.png?v=1573347020 360w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/miniscreenprints2019-1024x1024_540x.png?v=1573347020 540w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/miniscreenprints2019-1024x1024_720x.png?v=1573347020 720w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/miniscreenprints2019-1024x1024_900x.png?v=1573347020 900w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/miniscreenprints2019-1024x1024_1080x.png?v=1573347020 1080w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/miniscreenprints2019-1024x1024_1296x.png?v=1573347020 1296w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/miniscreenprints2019-1024x1024_1512x.png?v=1573347020 1512w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/miniscreenprints2019-1024x1024_1728x.png?v=1573347020 1728w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/miniscreenprints2019-1024x1024_2048x.png?v=1573347020 2048w" sizes="303px" srcSet="//cdn.shopify.com/s/files/1/0002/1915/2443/products/miniscreenprints2019-1024x1024_180x.png?v=1573347020 180w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/miniscreenprints2019-1024x1024_360x.png?v=1573347020 360w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/miniscreenprints2019-1024x1024_540x.png?v=1573347020 540w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/miniscreenprints2019-1024x1024_720x.png?v=1573347020 720w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/miniscreenprints2019-1024x1024_900x.png?v=1573347020 900w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/miniscreenprints2019-1024x1024_1080x.png?v=1573347020 1080w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/miniscreenprints2019-1024x1024_1296x.png?v=1573347020 1296w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/miniscreenprints2019-1024x1024_1512x.png?v=1573347020 1512w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/miniscreenprints2019-1024x1024_1728x.png?v=1573347020 1728w, //cdn.shopify.com/s/files/1/0002/1915/2443/products/miniscreenprints2019-1024x1024_2048x.png?v=1573347020 2048w" />
                      </a>
                    </div>
                    <div className="product__title text-center">
                      <a href="/products/mini-screen-prints-set-3">Mini Screen Prints SET 3</a>
                    </div>
                    <div className="product__prices text-center">
                      <span className="product__price"> From $4.00 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <hr />
    </div>
  )
}

export default Grid
