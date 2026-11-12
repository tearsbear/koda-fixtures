# Koda controlled fixtures

This is a deliberately buggy repository for testing Koda's GitHub integration and later verification. It is not the Koda application.

Use Node.js 22+. No dependencies or secrets are needed. Run `npm test`.

`toSlug` accepts ASCII strings, trims surrounding whitespace, lowercases letters, and replaces consecutive whitespace with one hyphen. Punctuation and non-ASCII normalization are outside this fixture's scope.

Baseline: **2 tests pass, 3 fail**. The three failures are intentional. A correct bug-fix PR changes only `slug.mjs`; it preserves all acceptance tests and yields five passing tests. Do not weaken the tests or alter the CI workflow to pass.

All issue/PR text should explicitly identify itself as a Koda controlled test fixture. No payment is triggered by these fixtures.
