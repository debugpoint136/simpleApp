import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Tissues } from '../api/tissues.js';

import './tissue.html';

Template.tissue.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Meteor.call('tissues.setChecked', this._id, !this.checked);
  },
  'click .delete'() {
    Meteor.call('tissues.remove', this._id);
  },
});
