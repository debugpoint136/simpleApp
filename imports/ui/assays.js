import { Template } from 'meteor/templating';

import './assays.html';

Template.assays.helpers({
  assays: [
    { text: 'DNA Methylation' },
    { text: 'Histone Mark' },
    { text: 'Histone-modifying enzymes' },
  ],
});
