import Ember from 'ember';

export default Ember.Service.extend({
  selectedDay: 'Monday',
  menuSelection: {
    Monday: {},
    Tuesday: {},
    Wednesday: {},
    Thursday: {},
    Friday: {}
  },
  chooseMenuOption(mealCategory, menuItemName) {
    this.set('menuSelection.' + this.get('selectedDay') + '.' + mealCategory, menuItemName);
  },
  setSelectedDayTo(day) {
    this.set('selectedDay', day);
  },
  removeMenuOption(day, mealCategory) {
    this.set('menuSelection.' + day + '.' + mealCategory, '');
  }
});
