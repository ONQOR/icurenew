import delve from 'dlv';
import CustomLink from '../../shared/CustomLink';

const Columns = ({ columns, locale, image }) => {
  return (
    <ul className="text-lg font-light pb-8 flex flex-wrap justify-center">
      {columns &&
        columns.map((column, index) => (
              <ul  id="menu_footer_showcases">
                {delve(column, 'links') &&
                  delve(column, 'links').map((link, index2) => (
                      <li
                        className=""
                        key={`footerColumnLink-${index2}`}
                      >
                      <CustomLink {...link} locale={locale} />
                    </li>
                  ))}
              </ul>
        ))}
    </ul>
  );
};

export default Columns;
