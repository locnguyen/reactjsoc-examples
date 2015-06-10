var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;


var Earnings = React.createClass({
    render: function () {
        return <h2>Earnings</h2>;
    }
});

var Dashboard = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Dashboard</h1>

                <Link to="earnings">Dashboard</Link>
                <RouteHandler/>
            </div>
        )
    }
});

var Home = React.createClass({
    render: function () {
        return <h1>Home</h1>
    }
});

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Link to="home">Home</Link> /
                <Link to="dashboard">Dashboard</Link>
                <RouteHandler/>
            </div>);
    }
});

var routes = (
    <Route handler={App} path="/">
        <Route name="home" path="home" handler={Home} />
        <Route name="dashboard" path="dashboard" handler={Dashboard}>
            <Route name="earnings" path="earnings" handler={Earnings} />
        </Route>
    </Route>
);

ReactRouter.run(routes, function (Handler) {
    React.render(<Handler />, document.getElementById('react-target'));
});