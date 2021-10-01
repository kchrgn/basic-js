import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  if (isNaN(+sampleActivity)) return false;
  if (typeof (sampleActivity) != 'string') return false;
  if (+sampleActivity > 15 || +sampleActivity <= 0) return false;
  if (Number.isInteger(Math.ceil(Math.log(15/sampleActivity)/1.22e-4))) {
    return Math.ceil(Math.log(15/sampleActivity)/1.22e-4)
   } else {
    return false;
   }

}
