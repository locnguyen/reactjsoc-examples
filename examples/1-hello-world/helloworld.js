var Hello = React.createClass({
    render: function () {
        return <div>Hello world! The time is {Date.now()}</div>;
    }
});

React.render(<Hello/>, document.getElementById('react-target'));

// Every component has a render() function
// Custom components are differentiated from HTML by starting with a capital letter
