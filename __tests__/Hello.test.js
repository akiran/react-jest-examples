jest.dontMock('../lib/Hello');

describe('Hello', function() {
  it('should have hello world text', function() {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var Hello = require('../lib/Hello');
    var hello = TestUtils.renderIntoDocument(<Hello />);
    expect(hello.getDOMNode().textContent).toEqual('hello world');
  });
});