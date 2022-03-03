import firstTopic from '../../assets/post-1.png';

import './aboutTopics.scss';

export function AboutTopis() {
  return(
    <>
      <main className="mainTopicFirst">
        <div className="firstTopic">
          <img src={firstTopic} alt="First Topic" />
          <span>Janeiro 04, 2022</span>
            <h3 className="firstTitle">Comecando no ReactJS em 2022</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquam mollitia tempora dolorem exercitationem, culpa libero quas repellat?
              Delectus aut placeat, culpa earum nisi aperiam quos et odio. Eos, ab. Repellendus!
            </p>
        </div>

        <div className="topics">
          <div>
            <span>Janeiro 04, 2022</span>
            <h3 className="secondTitle">Conheca as principais técnicas para conseguir uma vaga internacional em programacão</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquam mollitia tempora dolorem exercitationem, culpa libero quas repellat?
              Delectus aut placeat, culpa earum nisi aperiam quos et odio. Eos, ab. Repellendus!</p>
          </div>
          <hr />
          <div>
            <span>Janeiro 04, 2022</span>
            <h3 className="thirdTitle">Veja a evolucão do Front-end na prática</h3>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing ele vitae ipsa placeat! Est, assumenda!</span>
          </div>
        </div>
      </main>
    </>
  )
}