const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 2;

setTimeout(() => console.log('Timer 1 finished'), 0);
setImmediate(() => console.log('Immediate 1 finished'));

fs.readFile('test-file.txt', () => {
	console.log('I/o Finished');
	console.log('----------------------------');

	setTimeout(() => console.log('Timer 2 finished'), 0);
	setTimeout(() => console.log('Timer 3 finished'), 3000);

	setImmediate(() => console.log('Immediate 2 finished'));
	//setimmediat will happen once per tick

	process.nextTick(() => console.log('Process.nextTick()'));
	//nexttick is part of microtask queue which will execute after each phase not just after one
	//entire tick. It will happen before the next phase

	crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
		console.log(Date.now() - start, 'Password Encrypted');
	});
	crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
		console.log(Date.now() - start, 'Password Encrypted');
	});
	crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
		console.log(Date.now() - start, 'Password Encrypted');
	});
	crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
		console.log(Date.now() - start, 'Password Encrypted');
	});
});

console.log('Top level code');
