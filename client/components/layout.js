import delve from 'dlv';
import Footer from './global/Footer';
import Navbar from './global/Navbar';
import Contact from './global/Contact';
import PreviewBanner from './global/PreviewBanner';
import Seo from './seo';

const Layout = ({ children, global, pageData, preview, type }) => {
  console.log(global)
  return (
    <div>
      <Seo seo={delve(pageData, 'seo')} />
      {preview && <PreviewBanner />}
      <Navbar {...global} pageData={pageData} type={type} />
      {children}
      <Contact {...global} pageData={pageData} />
      <Footer {...global} pageData={pageData} />
    </div>
  );
};

export default Layout;
