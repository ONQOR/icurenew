import delve from 'dlv';

const Image = ({ repeater }) => {
  return (
      <section>
         {repeater &&
            repeater.map((item, index) => (
          <div className="p-4" key={index}>
            <h1>hello</h1>
          </div>
        ))}
      </section>
  );
};

Image.defaultProps = {};

export default Image;
