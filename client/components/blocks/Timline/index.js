import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Timeline= ({ }) => {

   return (
    <section className="timeline">
        <div className="container center">
            <h2>Key Milestones</h2>
            <div className='timeline__shape'>
                <span className='timeline__shape-vertical'></span>
                <span className='timeline__shape-horozontal'></span>
                <div className='timeline__shape__text'>
                    <h4>September 2018</h4>
                    <p>Took part in iCURe £53k</p>
                </div>
            </div>

            <div className='timeline__shape'>
                <span className='timeline__shape-vertical'></span>
                <span className='timeline__shape-horozontal'></span>
                <div className='timeline__shape__text'>
                    <h4>September 2018</h4>
                    <p>Took part in iCURe £53k</p>
                </div>
            </div>

            <div className='timeline__shape'>
                <span className='timeline__shape-vertical'></span>
                <span className='timeline__shape-horozontal'></span>
                <div className='timeline__shape__text'>
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
