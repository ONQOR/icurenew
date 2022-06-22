import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Timeline= ({ cards, title, hide }) => {

   return (
    <section className={hide ? "hide" : "timeline"}>
        <div className="container center">
            <h2>{title}</h2>

                {cards &&
                    cards.map((item, index) => (
                    <div className='timeline__item tester'>
                        <div className='timeline__item__shape'>
                            <div className='timeline__item__shape-vertical'></div>
                            <div className='timeline__item__shape-horozontal'></div>
                        </div>
                        <div className='timeline__item__text'>
                            <h4>{delve(item, "title")}</h4>
                            <p>{delve(item, "text")}</p>
                        </div>
                    </div>
                ))}
            
        </div> 
    </section>
   )
};

Timeline.defaultProps = {};

export default Timeline;
