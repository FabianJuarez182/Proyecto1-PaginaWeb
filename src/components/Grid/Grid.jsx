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
      </div>
    </div>
  )
}

export default Grid