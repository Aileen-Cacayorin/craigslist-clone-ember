import Ember from 'ember';

export function mostRecent(sortedListings) {
  // var string = "";
  // for (var i=0; i<3; i++) {
  //   string += "<li>" + sortedListings[i].name + "</li><br>";
  //
  // }
  // return string;

  var array = []
  var title = []
    for (var i=0; i<3; i++) {
    array.push(sortedListings[i]);
  };

    for (var i=0; i<array.length; i++) {
    title.push(array[1]);
  };
debugger;
  return title;
}

export default Ember.Helper.helper(mostRecent);
