import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'
import IMG5 from '../../assets/img5.png'
import IMG6 from '../../assets/img6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots/18212615-Cryptoc-Web-App',
  },

  {
    id: 2,
    image: IMG2,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots/18212615-Cryptoc-Web-App',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots/18212615-Cryptoc-Web-App',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots/18212615-Cryptoc-Web-App',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots/18212615-Cryptoc-Web-App',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots/18212615-Cryptoc-Web-App',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Worki</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map((item) => {
          const { id, image, title, github, demo } = item

          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt='img1' />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target={'_blank'}>
                  Github
                </a>
                <a
                  href={demo}
                  className='btn btn btn-primary'
                  target={'_blank'}
                >
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
