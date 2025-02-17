import opaImg from '../../assets/opa.svg'
import "./worker.css"


export const Worker = ({img, title, text}) =>{
    return (
        <div className="worker__box2">
            <div className="worker__1">
                <img src={opaImg} alt="" className='worker__img-opa'/>
                <h2 className="worker__title2">{title}</h2>
                <p className="worker__text">{text}</p>
                
            </div>
        </div>
    )
}