import { Dimensions, Platform } from 'react-native';

class Validator {
  static isIphoneXorAbove() {
    const dimen = Dimensions.get('window');
    return (
      Platform.OS === 'ios' &&
      !Platform.isPad &&
      !Platform.isTVOS &&
      ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))
    );
  }
}

export { Validator };
