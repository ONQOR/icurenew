import CaseStudies from '../../blocks/CaseStudies';
import Contact from '../../blocks/Contact';
import Media from '../../blocks/Media';
import Cta from '../../blocks/Cta';
import CtaCommandLine from '../../blocks/CtaCommandLine';
import Faq from '../../blocks/Faq';
import Features from '../../blocks/Features';
import FeaturesWithImages from '../../blocks/FeaturesWithImages';
import Hero from '../../blocks/Hero';
import Pricing from '../../blocks/Pricing';
import RelatedArticles from '../../blocks/RelatedArticles';
import Team from '../../blocks/Team';
import Testimonial from '../../blocks/Testimonial';
import HeroSmall from '../../blocks/HeroSmall';
import TextImg from '../../blocks/TextImg';
import Maps from '../../blocks/Maps';
import Icons from '../../blocks/Icons';
import Cohort from '../../blocks/Cohorts';
import Journey from '../../blocks/Journey';
import Tabs from '../../blocks/Tabs';
import Points from '../../blocks/Points';
import Text from '../../blocks/Text';
import Slick from '../../blocks/Slick';
import Clients from '../../blocks/Clients';
import Quote from '../../blocks/Quote';
import Basic from '../../blocks/Basic';
import TabsAlt from '../../blocks/TabsAlt';
import Timeline from '../../blocks/Timline';
import HeroAlt from '../../blocks/HeroAlt';
import TextImgShape from '../../blocks/TextImgShape';

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;

  switch (__component) {
    case 'blocks.faq':
      Block = Faq;
      break;
    case 'blocks.hero':
      Block = Hero;
      break;
    case 'blocks.cta':
      Block = Cta;
      break;
    case 'blocks.team':
      Block = Team;
      break;
    case 'blocks.pricing':
      Block = Pricing;
      break;
    case 'blocks.features':
      Block = Features;
      break;
    case 'blocks.testimonial':
      Block = Testimonial;
      break;
    case 'blocks.related-articles':
      Block = RelatedArticles;
      break;
    case 'blocks.cta-command-line':
      Block = CtaCommandLine;
      break;
    case 'blocks.features-with-images':
      Block = FeaturesWithImages;
      break;
    case 'blocks.media':
      Block = Media;
      break;
    case 'blocks.case-studies':
      Block = CaseStudies;
      break;
    case 'blocks.contact':
      Block = Contact;
      break;
    case 'blocks.hero-small':
      Block = HeroSmall;
      break;
    case 'blocks.text-img':
      Block = TextImg;
      break;
    case 'blocks.maps':
      Block = Maps;
      break;
    case 'blocks.icons':
      Block = Icons;
      break;
    case 'blocks.cohort':
      Block = Cohort;
      break;
    case 'blocks.journey':
      Block = Journey;
      break;
    case 'blocks.tabs':
      Block = Tabs;
      break;
    case 'blocks.points':
      Block = Points;
      break;
    case 'blocks.text':
      Block = Text;
      break;    
    case 'blocks.slick':
      Block = Slick;
      break;
    case 'blocks.clients':
      Block = Clients;
      break;
    case 'blocks.quote':
      Block = Quote;
      break;
    case 'blocks.basic':
      Block = Basic;
      break;
    case 'blocks.tabs-alt':
      Block = TabsAlt;
      break;
    case 'blocks.hero-alt':
      Block = HeroAlt;
      break;
    case 'blocks.timeline':
      Block = Timeline;
      break;
    case 'blocks.text-img-shape':
      Block = TextImgShape;
      break;
  }
  console.log(rest)
  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};

const BlockManager = ({ blocks }) => {
  return <div>{blocks.map(getBlockComponent)}</div>;
};

BlockManager.defaultProps = {
  blocks: [],
};

export default BlockManager;
