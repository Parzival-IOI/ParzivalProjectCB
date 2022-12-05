import React from 'react'
import {Link} from 'react-router-dom'
import Nav from '../link/navbarInfo'
import dropName from '../link/navdropdown'
import './MainBottm.css'

const MainBotton = () => {
  return (
    <div className='mainBottom'>
        <div><img src="https://business-cambodia.com/footer.png" alt="bot"/></div>
        <div className="information">
          <div className="bblock bblock1">
            <div>ស្វែងយល់អំពីពួកយើង</div>
            <a href="dfgdfg">អំពីពួកយើង</a>
            <div className='SocialMediaLogo'>
              <svg viewBox="0 0 24 24" className="h-7 w-7"><path fill="currentColor" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"></path></svg>
              <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2859 3333" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" className="h-5 w-5"><path fill="currentColor" d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="h-6 w-6"><path fill="currentColor" d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path></svg>
            </div>
            <div>Parzival@gmail.com</div>
          </div>
          <div className="bblock bblock2">
            <div>អត្ថបទផ្សេងៗ</div>
            <div>
              {Nav.map(item => {
                  return(
                    <Link to={item.url} key={item.id} className='link'>{item.name}</Link>
                  )})}
            </div>
            <div>
              {dropName.map(item => {
                return (
                  <Link  to={item.url} key={item.id} className='link'>{item.name}</Link>
                )
              })}
            </div>
          </div>
          <div className="bblock bblock3">
            <div>ទំនាក់ទំនងមកពួកយើង</div>
            <div>017 300 755/093 300 755</div>
            <div>
              Building 422 St. 271, Phum 1, Stung Mean <br/>
              Chey Khan MeanChey, Phnom Penh
            </div>
          </div>
          <div className="bblock bblock4">
            <div>Business Cambodia</div>
            <div>បំផុសគំនិតរកស៊ី នាំមនុស្សឱ្យហ៊ានចេញរកស៊ីតាមក្ដីស្រមៃ</div>
          </div>
        </div>
        <div className="bottom">
            <div><sup>&copy;</sup>2022 Baksey Media. All Rights Reserved.</div>
            <div><a href="https://www.facebook.com/hor.kimhouy.739" target='_blank' rel='noreferrer'>Developed by: Parzival</a></div>
        </div>
    </div>
  )
}

export default MainBotton;