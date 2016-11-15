export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */
  console.log('generating users');
  server.createList('user', 10);
  console.log('generating enterprises');
  server.createList('enterprises', 25);
}
