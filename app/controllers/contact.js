import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';
import { gte } from '@ember/object/computed';
import { and } from '@ember/object/computed';

export default Controller.extend({
  header: 'Contact Us',
  isLongEnough: gte('message.length', 5),
  isBothTrue: and('message', 'emailAddress'),

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid')
});
