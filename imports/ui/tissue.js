import { Template } from 'meteor/templating';

import { Tissues } from '../api/tissues.js';

import './tissue.html';

Template.tissue.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Tissues.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'() {
    Tissues.remove(this._id);
  },
});
