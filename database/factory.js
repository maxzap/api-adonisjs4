'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use('Factory');
const Hash = use('Hash');


Factory.blueprint('App/Models/User', async (faker) => {
  return {
    username: faker.username(),
    email: faker.email(),
    password: await Hash.make(faker.password()),
    created_at: faker.date()
  }
})

Factory.blueprint('App/Models/Customer', async (faker) => {
  return {
    user_id: async () => {
      return (await Factory.model('App/Models/User').create()).id
    },
    customer_phone: faker.phone(),
    customer_credit_card: faker.cc({type: 'Mastercard'})
  }
})

Factory.blueprint('App/Models/Cinema', async (faker) => {
  const cinema_name = faker.company();
  return {
    cinema_name: cinema_name,
    cinema_screenshot: 'http://fakeimg.pl/600x400/?text=${cinema_name}',
    cinema_address: faker.address(),
    cinema_phone: faker.phone(),
    cinema_seat_capacity: faker.integer({min: 300, max: 1000}),
    cinema_details: faker.sentence({words: 30})
  }
})
