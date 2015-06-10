var Dashboard = React.createClass({
    render: function () {
        return <h1>Dashboard</h1>;
    }
});

var Home = React.createClass({
    render: function () {
        return <h1>Home</h1>
    }
});

var App = React.createClass({
    render: function () {
        var Child;

        switch (this.props.route) {
            case 'dashboard':
                Child = Dashboard; break;
            case 'home':
                Child = Home; break;
            default:
                Child = Home;
        }

        return (
            <div>
                <a href="#home">Home</a>
                <a href="#dashboard">Dashboard</a>
                <Child/>
            </div>);
    }
});

function render() {
    var route = window.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('react-target'));
}

window.addEventListener('hashchange', render);
render();