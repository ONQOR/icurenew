import delve from 'dlv';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Twitter = ({ twitter}) => {
  if (twitter) {
  return (
    <Link href={twitter} passHref={true}>
        <a>
            <div>
            <FontAwesomeIcon
                icon={faTwitter}
            />
            <p>Twitter</p>
            </div>
        </a>
    </Link>
    )
  }
};

export default Twitter;
