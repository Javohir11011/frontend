import { Header } from './components/header/header';
import box2Img from './assets/box2__iimg.svg';
import { About } from './components/about/about';
import { Worker } from './components/worker/worker';
function App() {

  return (
    <>
    <Header />
    <section className='hero'>
      <div className="container">
        <div className="hero__block">
          <div className='hero__box1'>
            <h2 className='hero__title'>
              Bring everyone
              together to build
              better products
            </h2>
            <p className='hero__text'>
                Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
            </p>
            <button className='header__btn'>Get Started</button>
          </div> 
          <div className='hero__box2'>
            <img src={box2Img} alt="" />
          </div>
          <div ></div>
        </div>
      </div>
    </section>
    <section className='about'>
    <div className="container">
      <div className="about__block">
        <div className='service__box1'>
        <h2 className='service__title'>
        What’s different about Manage?
        </h2>
        <p className='service__text'>
        Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. 
        </p>
        </div>
        <div className='service__box2'>
        <About 
      number={"01"}
      title={"Track company-wide progress"}
      text={
        "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
      }
      />  
       <About 
      number={"02"}
      title={"Advanced built-in reports"}
      text={
        "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."      }
      />  
       <About 
      number={"03"}
      title={"Everything you need in one place"}
      text={
        "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."      }
      /> 
        </div>
      </div>
    </div>
    </section>
    <section className='worker'>
      <div className="container">
        <div className="worker__block">
              <h2 className='worker__title'>
                What they’ve said
            </h2>
            <divc className="worker__box22">
            <Worker title={"Anisha Li"}
            text = {"  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"}
            />
            <Worker title={"Anisha Li"}
            text = {"  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"}
            />
            </divc>
            <button className='worker__btn'>Get Started</button>
        </div>
      </div>
    </section>
    {/* <section className='somthing'>
      <div className="container">
        <div className="somthing">
          <h2 className='somthing__title'>
          Simplify how your team works today.
          </h2>
          <button className='somthing__btn'>
          Get Started
          </button>
        </div>
      </div>
    </section> */}
    </>
    
  )
}

export default App
