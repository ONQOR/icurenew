import delve from 'dlv';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

const Facebook = ({ facebook }) => {
  if (facebook) {
  return (
    <Link href={facebook} passHref={true}>
        <a>
            <div>
            <FontAwesomeIcon
                icon={faFacebookF}
            />
            <p>Facebook</p>
            </div>
        </a>
    </Link>
    )
  }
};

export default Facebook;
