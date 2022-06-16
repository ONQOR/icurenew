import delve from 'dlv';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Linkedin = ({ linkedin}) => {
  if (linkedin) {
  return (
    <Link href={linkedin} passHref={true}>
        <a>
            <div>
            <FontAwesomeIcon
                icon={faLinkedinIn}
            />
            <p>Linkedin</p>
            </div>
        </a>
    </Link>
    )
  }
};

export default Linkedin;
