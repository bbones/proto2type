export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */
  console.log('generating users');
  server.createList('user', 10);
  console.log('loading cash flow lines');
  server.loadFixtures('cflines');
  console.log('loading balances lines');
  server.loadFixtures('balance-lines');
  console.log('loading enterprises');
  server.loadFixtures('enterprises');
  console.log('loading liabilities');
  server.loadFixtures('liabilities');
}
