var Meetup = React.createClass({
    getInitialState: function () {
        return {
            isMember: false
        }
    },

    componentDidMount: function () {
        var that = this;
        setTimeout(function () {
            that.setState({isMember:true});
        }, 3000);
    },

    render: function () {
        var actionLabel = this.state.isMember ? 'RSVP' : 'Join now';

        return (
            <div>
                <h1>{this.props.meetupName}</h1>

                <div>
                    <button>{actionLabel}</button>
                </div>
            </div>
        );
    }
});

React.render(<Meetup meetupName="ReactJS OC" />, document.getElementById('react-target'));