var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Roman Convertor Functionality Tests ', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  it('- 10 Should be converted to X', function(){
    input = element(by.css('#input')).setAttribute('value', '10');
    output = element(by.css('#output'))
    element(by.css('#convert')).click();
    expect(output.getAttribute('value')).to.eventually.equal('X')
  })

  it('- 10 Should be converted to X', function(){
    input = element(by.css('#input')).setAttribute('value', '77');
    output = element(by.css('#output'))
    element(by.css('#convert')).click();
    expect(output.getAttribute('value')).to.eventually.equal('LXXVII')
  })

  it('- 10 Should be converted to X', function(){
    input = element(by.css('#input')).setAttribute('value', '3999');
    output = element(by.css('#output'))
    element(by.css('#convert')).click();
    expect(output.getAttribute('value')).to.eventually.equal('MMMCMXCIX')
  })


});