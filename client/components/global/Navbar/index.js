import delve from 'dlv';
import Nav from './nav';
import Cta from './cta';
import LocalSwitch from './localSwitch';
import Logo from './logo'

const Navigation = ({ navigation, pageData, type, logo, title  }) => {
  return (
    <header className="nav">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <h1>iCURe</h1>
        {/* <h2>{delve(navigation, 'title')}</h2> */}
        <Nav
          links={delve(navigation, 'links')}
          locale={delve(pageData, 'attributes.locale')}
        />

        {delve(navigation, 'rightButton') && (
          <div className="flex">
            <Cta
              href={delve(navigation, 'rightButton.href')}
              target={delve(navigation, 'rightButton.target')}
              label={delve(navigation, 'rightButton.label')}
            />
          </div>
        )}
      </div>
    </header>
  );
};

Navigation.defaultProps = {};

export default Navigation;
