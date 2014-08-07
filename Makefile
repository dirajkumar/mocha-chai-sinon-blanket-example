
REPORTER = Spec

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \

test-w:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--growl \
		--watch

test-blanket:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter html-cov > coverage.html \
		-r blanket
	rm -rf lib-cov

test-cov: lib-cov
	@MYPROJ_COVERAGE=1 $(MAKE) test REPORTER=html-cov > coverage.html
	rm -rf lib-cov

lib-cov:
	@jscoverage lib lib-cov

rm-files:
	if [ -a "lib-cov" ]; then rm -rf lib-cov; echo "Deleted lib-cov"; fi
	if [ -a "coverage.html" ]; then rm coverage.html; echo "Deleted lib-cov"; fi

.PHONY: test test-w
