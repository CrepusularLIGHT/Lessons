// SOLUTION 
// submitted: 11/12/2023 3:17 PM
// Record Collection (Lesson 95)

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {

  if (value == '' && prop != '') {
    delete records[id][prop];
  } else if (prop != 'tracks' && 'value' != '') {
    //assign the 'value' to the album's 'prop'
    records[id][prop] = value;
  } else if (prop == 'tracks' && 'value' != '') {
    //update the album's 'tracks' array
    //first : if the album does not have 'tracks' property
    //  assign to an empty array
    //  add the 'value' as the last item in the album's 'tracks' array
    if (!records[id][prop]) {
      records[id][prop] = [];
    };
    records[id][prop].push(value);
  } else {

  }
  console.log(records[id][prop]);
  console.log(records[id]);
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');