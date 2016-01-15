export default function(server) {
    server.create('user', {username: 'testuser', first_name: 'Test', last_name: 'User', email: 'testuser@example.com'});
}
