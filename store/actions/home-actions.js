import { IS_MOBILE } from '../constants/home-constants';

export const isMobileAction = bool => ({
  type: IS_MOBILE,
  mobile: bool,
});
