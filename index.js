const path = require('path');
const { which, exec } = require('shelljs');
const semver = require('semver');

const filePath = path.join(__dirname, 'dkimverify.py');

// ensure python installed
if (!which('python3')) throw new Error(`Python v3.5+ is required`);

const silent = process.env.NODE_ENV !== 'test';
const options = { silent, async: true };

// ensure python v3.5+
let version = exec('python3 --version', { silent });
version = semver.coerce(
  (version.stdout || version.stderr).split(' ')[1].trim()
);

if (!semver.satisfies(version, '>= 3.5'))
  throw new Error(
    `Python v3.5+ is required, you currently have v${version} installed`
  );

module.exports = function(rawEmail, index = 0) {
  return new Promise((resolve, reject) => {
    const child = exec(`python3 ${filePath} --index ${index}`, options);
    const stdout = [];
    const stderr = [];
    child.stderr.on('data', data => {
      stderr.push(data);
    });
    child.stdout.on('data', data => {
      stdout.push(data);
    });
    child.stdin.write(rawEmail);
    child.stdin.end();
    child.on('close', code => {
      // exits with code 1 if failed
      if (code === 1) return resolve(false);
      if (stderr.length > 0) return reject(new Error(stderr.join('').trim()));
      const output = stdout.join('').trim();
      if (output && output === 'signature ok') return resolve(true);
      reject(new Error(output));
    });
  });
};
