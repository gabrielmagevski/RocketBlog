import './carousel.scss';

import Code from '../../assets/featured-image.png';
import Arrow from '../../assets/arrow-right.svg'

export function Carousel() {
  return(
    <>
      <main className="topicMain">
        <div>
          <h3 className="title">
            Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
          </h3>
          <p className="subTitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Officia consequuntur magnam animi molestias ex enim repudiandae assumenda placeat sint 
            temporibus mollitia repellendus voluptatem, libero obcaecati aspernatur, at expedita et nam.
          </p>
          <a className="vejaMais" href="#">Veja mais <img src={Arrow} alt="Arrow right" /></a>
        </div>
        <div>
          <img src={Code} alt="Code" />
        </div>
      </main>
      <hr />
    </>
  )
}