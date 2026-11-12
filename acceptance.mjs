import test from 'node:test';
import assert from 'node:assert/strict';
import { toSlug } from './slug.mjs';

test('lowercases simple ASCII words', () => assert.equal(toSlug('Hello World'), 'hello-world'));
test('trims surrounding whitespace', () => assert.equal(toSlug('  Hello World  '), 'hello-world'));
test('collapses consecutive spaces', () => assert.equal(toSlug('Hello   World'), 'hello-world'));
test('collapses tabs and newlines', () => assert.equal(toSlug('Hello\t\nWorld'), 'hello-world'));
test('empty input yields empty output', () => assert.equal(toSlug(''), ''));
