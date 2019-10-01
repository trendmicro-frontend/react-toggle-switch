import React from 'react';
import ReactDOM from 'react-dom';
import ToggleSwitch from '../src';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="panel-title">
                                    Large
                                </div>
                            </div>
                            <div className="panel-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-6" style={{ minHeight: 40, padding: '8px 0' }}>
                                            <ToggleSwitch
                                                checked
                                                size="lg"
                                            />
                                            ON
                                        </div>
                                        <div className="col-sm-6" style={{ minHeight: 40, padding: '8px 0' }}>
                                            <ToggleSwitch
                                                disabled
                                                checked
                                                size="lg"
                                            />
                                            ON (Disabled)
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6" style={{ minHeight: 40, padding: '8px 0' }}>
                                            <ToggleSwitch
                                                checked={false}
                                                size="lg"
                                            />
                                            OFF
                                        </div>
                                        <div className="col-sm-6" style={{ minHeight: 40, padding: '8px 0' }}>
                                            <ToggleSwitch
                                                disabled
                                                checked={false}
                                                size="lg"
                                            />
                                            OFF (Disabled)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="panel-title">
                                    Small
                                </div>
                            </div>
                            <div className="panel-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-6" style={{ minHeight: 40, padding: '10px 0' }}>
                                            <ToggleSwitch
                                                checked
                                                size="sm"
                                            />
                                            ON
                                        </div>
                                        <div className="col-sm-6" style={{ minHeight: 40, padding: '10px 0' }}>
                                            <ToggleSwitch
                                                disabled
                                                checked
                                                size="sm"
                                            />
                                            ON (Disabled)
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6" style={{ minHeight: 40, padding: '10px 0' }}>
                                            <ToggleSwitch
                                                checked={false}
                                                size="sm"
                                            />
                                            OFF
                                        </div>
                                        <div className="col-sm-6" style={{ minHeight: 40, padding: '10px 0' }}>
                                            <ToggleSwitch
                                                disabled
                                                checked={false}
                                                size="sm"
                                            />
                                            OFF (Disabled)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="panel-title">
                                    Colored
                                </div>
                            </div>
                            <div className="panel-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-6" style={{ minHeight: 40, padding: '8px 0' }}>
                                            <ToggleSwitch
                                                onColor="green"
                                                checked
                                                size="lg"
                                            />
                                            ON Green
                                        </div>
                                        <div className="col-sm-6" style={{ minHeight: 40, padding: '8px 0' }}>
                                            <ToggleSwitch
                                                onColor="green"
                                                disabled
                                                checked
                                                size="lg"
                                            />
                                            ON Green (Disabled)
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6" style={{ minHeight: 40, padding: '8px 0' }}>
                                            <ToggleSwitch
                                                offColor="red"
                                                checked={false}
                                                size="lg"
                                            />
                                            OFF Red
                                        </div>
                                        <div className="col-sm-6" style={{ minHeight: 40, padding: '8px 0' }}>
                                            <ToggleSwitch
                                                onColor="green"
                                                offColor="red"
                                                checked
                                                size="lg"
                                            />
                                            ON / OFF (Red / Green)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
