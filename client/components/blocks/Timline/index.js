import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Timeline= ({ }) => {

   return (
    <section className="timeline">
        <div className="container center">
            <h2>Key Milestones</h2>

            <div className='timeline__item tester'>
                <div className='timeline__item__shape'>
                    <div className='timeline__item__shape-vertical'></div>
                    <div className='timeline__item__shape-horozontal'></div>
                </div>
                <div className='timeline__item__text'>
                    <h4>September 2018</h4>
                    <p>Took part in iCURe £53k</p>
                </div>
            </div>
          
            <div className='timeline__item'>
                <div className='timeline__item__shape'>
                    <div className='timeline__item__shape-vertical'></div>
                    <div className='timeline__item__shape-horozontal'></div>
                </div>
                <div className='timeline__item__text'>
                    <h4>September 2018</h4>
                    <p>Took part in iCURe £53k</p>
                </div>
            </div>
          
            <div className='timeline__item tester'>
                <div className='timeline__item__shape'>
                    <div className='timeline__item__shape-vertical'></div>
                    <div className='timeline__item__shape-horozontal'></div>
                </div>
                <div className='timeline__item__text'>
                    <h4>September 2018</h4>
                    <p>Took part in iCURe £53k</p>
                </div>
            </div>      
            
        </div> 
    </section>
   )
};

Timeline.defaultProps = {};

export default Timeline;
