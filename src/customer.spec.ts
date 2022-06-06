import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { customerDecorator } from '../fixtures/customer/customer-decorator';
import { createAccount } from './customer';

chai.use(chaiAsPromised);

describe('when a customer signs up for an account', function () {
  let customerMock: any;

  before(() => {
    customerMock = customerDecorator();
  });

  after(() => {
    // Clean up reset stubs
  });

  it('should create an account and return the account id', function () {
    const actual = createAccount(customerMock);
    expect(actual).to.equal({ id: '1234' });
  });

  it('should create an account and return the account id', function () {
    customerMock = customerDecorator({ firstName: 'Jimmy' });
    const actual = createAccount(customerMock);
    expect(actual).to.equal({ id: '1234' });
  });

  it('should create an account and return the account id', function () {
    customerMock = customerDecorator({
      firstName: 'Cesar',
      occupation: 'Dentist',
    });
    const actual = createAccount(customerMock);
    expect(actual).to.equal({ id: '1234' });
  });
});
