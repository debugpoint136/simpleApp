import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './tissues.html';
import { Tissues } from '../api/tissues.js';

Template.tissues.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
});

Template.tissues.helpers({
  tissues() {
    const instance = Template.instance();
    if (instance.state.get('hideCompleted')) {
      // If hide completed is checked, filter tissues
      return Tissues.find({ checked: { $ne: true } });
    }
    // Otherwise return all tissues
    return Tissues.find({});
  },
  tissueCount() {
    return Tissues.find({ checked: true  }).count();
  },
});

Template.tissues.events({
  'submit .new-tissue'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert a task into the collection
    Tissues.insert({
      text
    });

    // Clear form
    target.text.value = '';
  },
  'change .hide-completed input'(event, instance) {
    instance.state.set('hideCompleted', event.target.checked);
  },
});
