import { Template } from 'meteor/templating';

import './body.html';
import './tissues.js';
import './assays.js';

Template.body.helpers({
  tasks: [
    { text: 'This is task 1' },
    { text: 'This is task 2' },
    { text: 'This is task 3' },
  ],
});

Template.body.events({
  'click #tissuesHeader'(event) {
    console.log('clicked on header');
    Modal.show('tissues');
  }
});
