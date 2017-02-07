var React         = require('react');
var ReactDOM      = require('react-dom');
var expect        = require('expect');
var TestUtils     = require('react-addons-test-utils');
var $             = require('jQuery');
var Controls      = require('Controls');
var Countdown     = require('Countdown');

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('render', () => {
        it('should render pause when started', () => {
            var controls     = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
            var $el          = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $el.find('button:contains(Pause)');

            expect($pauseButton.length).toBe(1);
        });

        it('should render start when paused', () => {
            var controls     = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
            var $el          = $(ReactDOM.findDOMNode(controls));
            var $startButton = $el.find('button:contains(Start)');

            expect($startButton.length).toBe(1);
        });

        it('should pause countdown on paused status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);

            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('paused');

            setTimeout(() => {
                expect(countdown.state.count).toBe(3);
                expect(countdown.state.countdownStatus).toBe('paused');
                done();
            }, 1001);
        });

        it('should reset countdown on stopped status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);

            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('stopped');

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.countdownStatus).toBe('stopped');
                done();
            }, 1001);
        });
    });
});