var React = require('react');

var Controls = React.createClass({
    onStatusChange: function (newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    },
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    componentWillReceiveProps: function (newPros) {
        //console.log(newPros.countdownStatus);
    },
    render: function () {
        var {countdownStatus} = this.props;
        var renderStartStopButton = () => {
            if(countdownStatus == 'started') {
                return <button className="button hollow secondary" onClick={this.onStatusChange('paused')}>Pause</button>
            } else {
                return <button className="button hollow primary" onClick={this.onStatusChange('started')}>Start</button>
            }
        };

        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button hollow alert" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        );
    }
});

module.exports = Controls;