test-blanket:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter html-cov > coverage.html \
		-r blanket
	rm -rf lib-cov

rm-files:
	if [ -a "lib-cov" ]; then rm -rf lib-cov; echo "Deleted lib-cov"; fi
	if [ -a "coverage.html" ]; then rm coverage.html; echo "Deleted lib-cov"; fi

.PHONY: test-blanket