import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  nickname(i) { return `Nick${i}`; },
  name(i) {return `Name${i}`},
  age(i) {return 20+i}
});
