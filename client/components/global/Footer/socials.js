import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Socials = ({ twitter, linkedin, facebook }) => {
  if (twitter) {
  return (
    <div>
      <p>twitter</p>
    </div>
  )} else if (linkedin){
  return (
  <div>
    <p>facebook</p>
  </div>
  )} else if (facebook){
    return (
    <div>
      <p>facebook</p>
    </div>
  )} else {
    return(
      <></>
    )
  }
};

export default Socials;
