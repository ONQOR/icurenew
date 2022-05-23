import CustomLink from '../../shared/CustomLink';

const Cta = ({ href, target, label }) => {
  return (
    <button
      type="button"
      className=""
    >
      <CustomLink href={href} target={target} label={label} isExternal={true} />
    </button>
  );
};

export default Cta;
