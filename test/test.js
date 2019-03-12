const fs = require('fs');
const path = require('path');
const test = require('ava');

const fail = '';

// https://github.com/jhermsmeier/node-dkim/blob/master/test/data/gmail-raw.txt
const pass = fs.readFileSync(path.join(__dirname, 'fixtures', 'gmail-raw.txt'));

const dkimVerify = require('..');

test('throws error', async t => {
  await t.throwsAsync(dkimVerify());
  t.pass();
});

test('returns fail', async t => {
  const result = await dkimVerify(fail);
  t.is(result, false);
});

test('returns pass', async t => {
  const result = await dkimVerify(pass);
  t.is(result, true);
});
