var Meetup = React.createClass({
    getInitialState: function () {
        return {
            isMember: false,
            rsvpd: false,
            guests: 0
        }
    },

    handleJoin: function () {
        this.setState({isMember: true});
    },

    handleRsvp: function () {
        this.setState({rsvpd: true, guests: this.refs.guestsRef.getDOMNode().value});
    },

    updateGuests: function (event) {
        this.setState({guests: event.target.value });
    },

    reset: function () {
        this.setState({guests: 0});
    },

    render: function () {
        var joinButton = this.state.isMember ? undefined: <button type="button" onClick={this.handleJoin}>Join</button>;
        var rsvpButton = this.state.isMember ? <button type="button"  onClick={this.handleRsvp}>RSVP</button> : undefined;
        var guestsInput = this.state.isMember ? <input type="text" ref="guestsRef" placeholder="# of guests" value={this.state.guests} onChange={this.updateGuests} /> : undefined;
        var resetButton = this.state.isMember ? <button type="button" onClick={this.reset}>Reset</button> : undefined;
        var message = this.state.rsvpd ? this.state.guests + ' guests are coming to ReactJS-OC tonight!': '';

        return (
            <div>
                {joinButton}
                {rsvpButton}
                {guestsInput}
                {resetButton}
                {message}
            </div>
        )
    }
});

React.render(<Meetup meetupName="ReactJS OC"/>, document.getElementById('react-target'));