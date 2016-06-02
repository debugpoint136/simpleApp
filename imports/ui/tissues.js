import { Template } from 'meteor/templating';

import './tissues.html';

Template.tissues.helpers({
  tissues: [
    { text: 'Blood' },
    { text: 'Bone' },
    { text: 'Muscle' },
  ],
});
