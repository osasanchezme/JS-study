const os = require('os');

// Platform
console.log(os.platform());

// CPU architecture
console.log(os.arch());

// CPU Core info
console.log(os.cpus());

// Free memory
console.log(os.freemem())

// Total memory
console.log(os.totalmem())

// Percentage used
console.log(os.freemem() / os.totalmem() * 100)

// Home directory
console.log(os.homedir());

// Uptime
console.log(os.uptime());
console.log(os.uptime() / 3600, 'hours');