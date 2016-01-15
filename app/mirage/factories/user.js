import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
    username: faker.internet.username,
    name: faker.name.findName,
    email: faker.internet.email
});
