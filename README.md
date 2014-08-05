# Testing NodeJS with Mocha, Chai, Sinon, and Blanket

###### By Diraj Potlapally (dirajkumar@gmail.com)
###### Tuesday, 05 August 2014

###This project provides boilerplate for supporting test coverage reporting.

1. Install JSCoverage binary
```
$ git clone https://github.com/visionmedia/node-jscoverage.git
$ cd node-jscoverage
$ ./configure && make
$ sudo make install
```

2. Install dependencies (mocha, chai, and sinon)
```
$ cd /path/to/project/
$ npm install
```

3. Generate coverage report
```
$ mocha -r blanket -R html-cov -> coverage.html
```
(report output to coverage.html)

## License
MIT