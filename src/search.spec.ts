import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { search } from './search';

chai.use(chaiAsPromised);

describe('when a search request is received', function () {
  before(() => {

  });

  after(() => {
    // Clean up reset stubs 
  })

  const query = {
    q: 'sharp',
    category: 'payment',
    compatibleWith: 'aws',
    runtime: 'node,python',
    tag: 'typescript,sqs',
  };

  it('should return search results', function () {
    const actual = search(query);
    expect(true).to.equal(true);
  });
});
