import customer from './customer.json';

// `customer.json`
// {
//   "firstName": "John",
//   "lastName": "Connor",
//   "occupation": "Resistance leader"
// }

// Selling point:
// - Will always return a new reference thus avoiding mutation of test data across test sets
// - Clean way of creating heaps of variation test sets without creating more files on disk
export const customerDecorator = (args?: Record<any, any>) => ({
  ...customer,
  ...args,
});

// customerDecorator();
// {
//   "firstName": "John",
//   "lastName": "Connor",
//   "occupation": "Resistance leader"
// }

// customerDecorator({ firstName: 'Sarah'});
// {
//   "firstName": "Sarah",
//   "lastName": "Connor",
//   "occupation": "Resistance leader"
// }
