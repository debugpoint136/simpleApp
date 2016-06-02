import { Template } from 'meteor/templating';

import './body.html';
import './tissues.js';
import './assays.js';
import './tissue.js';


Template.body.helpers({

});

Template.body.events({
  'click #tissuesHeader'(event) {
    Modal.show('tissues');
  },
});
