const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Chartreux', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling wellThe Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      console.log(desc.trim);
      assert.equal(expectedDesc, desc.trim());
      

      done();
    });
  });
  it ('returns a string description for a invalid breed, via callback' , (done) => {
    fetchBreedDescription('Mio', (err, desc) => {
        // we expect no error for this scenario
        const expectedError = "BREED NOT FOUND";
        assert.equal(expectedError, err);
  
         
  
        // compare returned description
        assert.equal(null, desc);
  
        done();
      });

   });
});