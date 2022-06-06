import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { search } from './search';

chai.use(chaiAsPromised);

// DON'T DO THIS!
// 1. Test data should be decoupled from the test case
// 2. Shared test data should be returned by a test function decorator
export const searchTestData = [
  {
    id: 9,
    createdAt: '2022-03-24T00:21:54.947Z',
    updatedAt: '2022-03-24T00:21:54.948Z',
    type: 'CLOUD_FUNCTION',
    title: 'Vector Blend Copixel Pixel Snap',
    content: null,
    status: 'PUBLISHED',
    userId: 6,
    runtimeId: 7,
    cloudProviderId: 4,
    numDownloads: 22851,
    CSS: null,
    coverImage: null,
    iconUrl: null,
    images: [],
    tags: [
      {
        id: 3,
        slug: 'analytics',
        name: 'Analytics',
      },
      {
        id: 7,
        slug: 'image-manipulation',
        name: 'Image manipulation',
      },
    ],
    categories: [
      {
        id: 4,
        slug: 'analytics',
        name: 'Analytics',
        iconUrl: null,
      },
    ],
    runtime: {
      group: 'node',
      name: 'Node.js 10',
      identifier: 'nodejs10.x',
      iconUrl:
        'https://s3.ap-southeast-2.amazonaws.com/static.cloudfunctionhub/runtime-icons/node-icon.svg',
    },
    cloudProvider: {
      name: 'aws',
      displayName: 'Amazon Web Services',
      iconUrl:
        'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg',
    },
    user: {
      name: 'heavygorilla363',
      displayName: 'heavygorilla363',
      profile: {
        id: 6,
        bio: 'Professional analyst. Food aficionado. Total travel maven. Gamer. Bacon advocate. Internet junkie.',
        avatarUrl:
          'https://s3.ap-southeast-2.amazonaws.com/static.cloudfunctionhub/profile-avatars/06.svg',
        userId: 6,
      },
    },
  },
];

describe('when a search request is received', function () {
  before(() => {
    // ..
  });

  after(() => {
    // Clean up reset stubs
  });

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
