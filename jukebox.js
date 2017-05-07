// alert("jukebox is linked")


// let notes = [
//
//   {pitch: 'A', beats: 1},
//   {pitch: 'C#', beats: 2},
//   {pitch:'D', beats: 4}];
//
// // Play the song at 400 beats per minute.
// playSong(notes, 400);

// A*2 D*2 D E D C# B*2 B*2 B*2 E*2 E F# E D C#*2 A*2 A*2 F#*2 F# G F# E D*2 B*2 A A B*2 E*2 C#*2 D*2

let input = prompt("Give me a song please").replace(/^\s+|\s+$/g, '');

const parseSong = function(string) {
  let notes = [ ];
  arrayNotes = string.split(" ");
  for (let note of arrayNotes) {
    notes.push(parseNote(note));
  }
  return notes;
};

const parseNote = function(note) {
   if (note.length <= 2) {
      return {pitch: note, beats: 1};
    } else {
      let splitNote = note.split("*");
      return {pitch: splitNote[0], beats: splitNote[1]};
    }
};

const onComplete = function() {
   console.log('Song finished playing');
   let input2 = prompt("Give me another song please").replace(/^\s+|\s+$/g, '');
   playSong(parseSong(input2), 300, onComplete);
}
// parseSong(input);

playSong(parseSong(input), 300, onComplete);
