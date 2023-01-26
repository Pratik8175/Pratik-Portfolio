import React from 'react'
import './check.css'
import {BiCheck} from 'react-icons/bi'

const check = () => {
  return (
    <section id='check'>
      <h5>What I Offer</h5>
      <h2>Check</h2>

      <div className='container check__container'>
        <artical className='check'>
          <div className="check__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='check__list'>
            <li>
              <BiCheck className='check__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='check__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='check__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='check__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='check__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='check__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </artical>
        {/* END OF UI/UX */}


        <artical className='check'>
          <div className="check__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className='check__list'>
            <li>
              <BiCheck className='check__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='check__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='check__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='check__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='check__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='check__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>


            <li>
              <BiCheck className='check__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </artical>
        {/* END OF WEB DEVELOPMENT*/}


        <artical className='check'>
          <div className="check__head">
            <h3>CONTENT CREATION</h3>
          </div>

          <ul className='check__list'>
            <li>
              <BiCheck className='check__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='check__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='check__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='check__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='check__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='check__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </artical>
        {/* CONTENT CREATION */}
      </div>
    </section>
  )
}

export default check
