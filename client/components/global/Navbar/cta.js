import CustomLink from '../../shared/CustomLink';
import { useRouter } from "next/router";
import Link from 'next/link';

const Cta = ({ href, target, label }) => {
  const router = useRouter();
  return (
    <button
      type="button"
      className={router.asPath.startsWith("/blog") ? "current": ""}
    >
      <CustomLink href={href} target={target} label={label} isExternal={true} />
    </button>
  );
};

export default Cta;
