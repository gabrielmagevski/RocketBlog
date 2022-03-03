
import FirstTopic from '../../assets/post-2.png';
import SecondTopic from '../../assets/post-3.png';
import ThirdTopic from '../../assets/post-4.png';


import './thirdTopics.scss';


export function ThirdTopics() {
  return(
    <>
      <main className="ThirdMain">
        <div className="groupTopics">
          <div>
            <img src={FirstTopic} alt="Topic" />
            <span>Janeiro 04, 2022</span>

            <h3>10 dicas para conseguir a vaga desejada</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas eveniet aliquid sint cumque a, aut id, est pariatur possimus
            </p>
          </div>

          <div>
            <img src={SecondTopic} alt="Second Topic" />
            <span>Janeiro 04, 2022</span>

            <h3>Deixe seu código mais semântico com essas dicas</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas eveniet aliquid sint cumque a, aut id, est pariatur possimus
            </p>
          </div>
          <div>

            <img src={ThirdTopic} alt="Third Topic" />
            <span>Janeiro 04, 2022</span>

            <h3>Use essas dicas nas susas aplicacoes mobile</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas eveniet aliquid sint cumque a, aut id, est pariatur possimus
            </p>
          </div>
        </div>
      </main>
    </>
  )
}