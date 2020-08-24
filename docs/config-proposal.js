const humany = {};

humany.configure('default', (config) => {
  // Webprovisions implementation 'default'
});

humany.configure('default:postnord', (config) => {
  // Webprovisions implementation 'default' for tenant 'postnord'
});

humany.configure('*', (config) => {
  // Webprovisions implementations, all for all tenants
});

humany.configure('*:postnord', (config) => {
  // Webprovisions implementations, all for tenant 'postnord'
});

humany.configure((config) => {
  // Humany implementation, single implementation, single tenant
});