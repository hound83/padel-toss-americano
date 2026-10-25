// Run with: node --test tests/koc.test.cjs
// The website currently ships as a single index.html. Exercise the *real*
// embedded assignment function without maintaining a duplicate algorithm here.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const begin = html.indexOf('function makeKocAssignment(attendees, k){');
const end = html.indexOf('\n  function rollKoc(){', begin);
assert.ok(begin !== -1 && end > begin, 'KOC assignment function was found');
const shuffle = values => {
  const output = values.slice();
  for (let i = output.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [output[i], output[j]] = [output[j], output[i]];
  }
  return output;
};
const makeAssignment = new Function('shuffle', html.slice(begin, end) + '\nreturn makeKocAssignment;')(shuffle);

function checkAssignment(courts, attendees) {
  const assignment = makeAssignment(attendees, {courts});
  const actual = Object.keys(assignment).map(Number).sort((a,b) => a-b);
  assert.deepEqual(actual, attendees.slice().sort((a,b) => a-b));
  const occupancy = Array.from({length: courts + 1}, () => 0);
  for (const value of Object.values(assignment)) {
    assert.ok(Number.isInteger(value) && value >= 1 && value <= courts);
    occupancy[value]++;
    assert.ok(occupancy[value] <= 4);
  }
  // The highest courts are filled before the lower courts are used.
  let remaining = attendees.length;
  for (let court = courts; court >= 1; court--) {
    assert.equal(occupancy[court], Math.min(4, remaining));
    remaining -= occupancy[court];
  }
  return assignment;
}

test('two courts: organiser starts on court 1 when that court has space', () => {
  for (const count of [5, 6, 7, 8]) {
    const attendees = Array.from({length: count}, (_, i) => i);
    for (let attempt = 0; attempt < 20; attempt++) {
      assert.equal(checkAssignment(2, attendees)[0], 1);
    }
  }
});

test('organiser starts on the penultimate court and invited pair on the lowest capable court', () => {
  for (const courts of [3, 4, 5, 8]) {
    const attendees = Array.from({length: courts * 4}, (_, i) => i);
    for (let attempt = 0; attempt < 20; attempt++) {
      const assignment = checkAssignment(courts, attendees);
      assert.equal(assignment[0], courts - 1);
      assert.equal(assignment[courts * 4 - 2], 1);
      assert.equal(assignment[courts * 4 - 1], 1);
    }
  }
});

test('two absences leave vacancies only on the lowest court', () => {
  for (const courts of [2, 3, 4, 5, 8]) {
    const attendees = Array.from({length: courts * 4}, (_, i) => i)
      .filter(i => i !== 4 && i !== 5);
    for (let attempt = 0; attempt < 20; attempt++) {
      const assignment = checkAssignment(courts, attendees);
      assert.equal(assignment[0], courts === 2 ? 1 : courts - 1);
      if (courts > 2) {
        assert.equal(assignment[courts * 4 - 2], 1);
        assert.equal(assignment[courts * 4 - 1], 1);
      }
    }
  }
});

test('all player counts from 4 to 32 produce valid compact court assignments', () => {
  for (let courts = 2; courts <= 8; courts++) {
    for (let count = 4; count <= courts * 4; count++) {
      const attendees = Array.from({length: count}, (_, i) => i);
      for (let attempt = 0; attempt < 6; attempt++) checkAssignment(courts, attendees);
    }
  }
});

test('absence patterns do not create duplicates, gaps or overfilled courts', () => {
  for (let courts = 2; courts <= 8; courts++) {
    const all = Array.from({length: courts * 4}, (_, i) => i);
    for (let attempt = 0; attempt < 100; attempt++) {
      const attendees = shuffle(all).slice(0, 4 + Math.floor(Math.random() * (all.length - 3)));
      checkAssignment(courts, attendees);
    }
  }
});
