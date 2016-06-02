import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tissues = new Mongo.Collection('tissues');

Meteor.methods({
  'tissues.insert'(text) {
    check(text, String);

    // Make sure the user is logged in before inserting a tissue
    // if (! this.userId) {
    //   throw new Meteor.Error('not-authorized');
    // }

    Tissues.insert({
      text
      // createdAt: new Date(),
      // owner: this.userId,
      // username: Meteor.users.findOne(this.userId).username,
    });
  },
  'tissues.remove'(tissueId) {
    check(tissueId, String);

    Tissues.remove(tissueId);
  },
  'tissues.setChecked'(tissueId, setChecked) {
    check(tissueId, String);
    check(setChecked, Boolean);

    Tissues.update(tissueId, { $set: { checked: setChecked } });
  },
});
