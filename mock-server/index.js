const glob = require('glob');
const mockServerClient = require('mockserver-client').mockServerClient;

mockServerClient('mockserver', 8080)
  .reset()
  .then(() => {
    glob.sync('./mocks/**/*.js').forEach((file) => {
      console.log('running mock ', file);
      const mocker = require(file);
      mocker('mockserver', 8080);
    });
  });
