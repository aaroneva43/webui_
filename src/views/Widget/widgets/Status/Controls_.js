import React, {Component} from 'react';

class Controls extends Component {
  constructor(props) {
    super(props);

    this.toggleControls = this.toggleControls.bind(this);
    this.openPanel = this.openPanel.bind(this);
    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);

    this.state = {
      showMask: false,
      showControls: false,
      showAddDashboard: false,
      showEditDashboard: false,
      showDeleteDashboard: false,
      showResetDashboard: false,
      showAddWidgets: false
    };
  }

  toggleControls() {

    var DBPanelsShow = JSON.parse(localStorage.DBPanelsShow);
    if(this.state.showMask) {
      this.setState({
        showMask: false,
        showControls: false
      });
    } else {
      this.setState({
        showMask: true,
        showControls: true
      });
      if(DBPanelsShow.current === 'Main') {
        setTimeout(function(){
          document.querySelectorAll('[data-panel="edit-dashboard"]')[0].setAttribute('disabled', 'disabled');
          document.querySelectorAll('[data-panel="delete-dashboard"]')[0].setAttribute('disabled', 'disabled');
        },0);
      }
    }
  }

  openPanel(e) {
    const panel = e.currentTarget.dataset.panel;

    document.getElementById('dashboard-forms').classList.add('open');

    switch (panel) {
      case 'add-dashboard':
        this.setState({ showAddDashboard: true });
        // var ele = $triggerTag.parent().parent().parent().find('.add-dashboard').find('input[type=text]');
        // ele.focus(function(){
        //   ele.parent().removeClass('has-error');
        // });
        break;
      case 'edit-dashboard':
        this.setState({ showEditDashboard: true });
        // var ele = $triggerTag.parent().parent().parent().find('.edit-dashboard').find('input[type=text]');
        // ele.val(DBPanelsShow.current);
        // ele.focus(function(){
        //   ele.parent().removeClass('has-error');
        // });
        break;
      case 'delete-dashboard':
        this.setState({ showDeleteDashboard: true });
        // var ele = $triggerTag.parent().parent().parent().find('.edit-dashboard').find('input[type=text]');
        // ele.val(DBPanelsShow.current);
        // ele.focus(function(){
        //   ele.parent().removeClass('has-error');
        // });
        break;
      case 'reset-dashboard':
        this.setState({ showResetDashboard: true });
        // var ele = $triggerTag.parent().parent().parent().find('.edit-dashboard').find('input[type=text]');
        // ele.val(DBPanelsShow.current);
        // ele.focus(function(){
        //   ele.parent().removeClass('has-error');
        // });
        break;
      case 'add-widgets':
        this.setState({ showAddWidgets: true });
        // var widgets = DBPanelsShow.dbs[DBPanelsShow.current];
        // $.each($triggerTag.parent().parent().parent().find('.add-widget').find('input[type=checkbox]'), function(index, value) {
        //   if($.inArray($(value).val(), widgets) !== -1) {
        //     $(value).prop('checked', true);
        //   }
        // });
        break;
    }

    // var DBPanelsShow = JSON.parse(localStorage.DBPanelsShow);
    // var panel = $triggerTag.data('panel');
    // $triggerTag.parent().parent().parent().find('.dashboard-forms').toggleClass('open');
    // $triggerTag.parent().parent().parent().find('.'+panel).show();
    //
  }

  submit(panels) {
    this.porps.submit(panels);
  }

  cancel() {
    document.getElementById('dashboard-forms').classList.remove('open');
    this.setState({
      showMask: false,
      showControls: false,
      showAddDashboard: false,
      showEditDashboard: false,
      showDeleteDashboard: false,
      showAddWidgets: false
    });
  }

  render() {
    return (
      <div className="db-controls">
      { this.state.showMask &&
        <div className="dashboard-controls-mask"></div>
      }
        <div className="dashboard-controls">
        { this.state.showControls &&
          <div className="controls">
            <button type="button" className="btn btn-primary btn-block" data-panel="add-dashboard" onClick={this.openPanel}><i className="fa fa-plus"></i> Add Dashboard</button>
            <button type="button" className="btn btn-primary btn-block" data-panel="edit-dashboard" onClick={this.openPanel}><i className="fa fa-pencil"></i> Edit Dashboard</button>
            <button type="button" className="btn btn-primary btn-block" data-panel="delete-dashboard" onClick={this.openPanel}><i className="fa fa-trash"></i> Delete Dashboard</button>
            <button type="button" className="btn btn-primary btn-block" data-panel="reset-dashboard" onClick={this.openPanel}><i className="fa fa-rotate-left"></i> Reset Dashboards</button>
            <hr />
            <button type="button" className="btn btn-primary btn-block" data-panel="add-widgets" onClick={this.openPanel}><i className="fa fa-plus"></i> Add Widgets</button>
          </div>
        }
          <button type="button" className="btn btn-primary pull-right" onClick={this.toggleControls}><i className="fa fa-cog"></i></button>
        </div>

        <div id="dashboard-forms" className="dashboard-forms">
          { this.state.showAddDashboard &&
            <AddDashboard submit={this.submit} cancel={this.cancel} {...this.props} />
          }

          { this.state.showEditDashboard &&
            <EditDashboard submit={this.submit} cancel={this.cancel} {...this.props} />
          }

          { this.state.showDeleteDashboard &&
            <DeleteDashboard submit={this.submit} cancel={this.cancel} {...this.props} />
          }

          { this.state.showResetDashboard &&
            <ResetDashboard submit={this.submit} cancel={this.cancel} {...this.props} />
          }

          { this.state.showAddWidgets &&
            <AddWidgets submit={this.submit} cancel={this.cancel} {...this.props} />
          }
        </div>
      </div>
    )
  }
}

class AddDashboard extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);

    this.state = {
      // showMask: false,
      // showControls: false
    };
  }

  submit(e) {
    e.preventDefault();
    e.stopPropagation();

    let DBPanelsShow = JSON.parse(localStorage.DBPanelsShow);
    let addEle = document.getElementsByName('name')[0];
    let addName = document.getElementsByName('name')[0].value;

    if (
      !/^[A-Za-z0-9_-]{1,20}$/.test(addName) ||
      DBPanelsShow.dbs[addName]
    ) {
      addEle.parent().addClass('has-error');
      return;
    }
    DBPanelsShow.current = addName;
    DBPanelsShow.dbs[addName] = [];

    localStorage.setItem('DBPanelsShow', JSON.stringify(DBPanelsShow));

    this.props.history.push('/config/status/'+addName);
    this.props.submit(DBPanelsShow);
    this.props.cancel();
  }

  cancel() {
    this.props.cancel();
  }

  render() {
    return (
      <div id="add-dashboard" className="panel panel-default add-dashboard">
        <div className='dashboard-title'>Add Dashboard</div>
        <form name="add-dashboard">
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" className="form-control" />
            <p className="help-block error-block">Invalid value, should match <br />regular expression {/*/^[A-Za-z0-9_-]{1,20}$/*/} <br />and be unique.</p>
          </div>
          <div className="form-group">
            <button data-submit="add-dashboard" onClick={this.submit} className="btn btn-primary">Save</button>
            <button onClick={this.cancel} className="btn btn-default">Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

class EditDashboard extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);

    this.state = {
      // showMask: false,
      // showControls: false
    };
  }

  componentDidMount() {
    document.getElementsByName('name')[0].value = this.props.match.params.id2
  }

  submit(e) {
    e.preventDefault();
    e.stopPropagation();

    let DBPanelsShow = JSON.parse(localStorage.DBPanelsShow);
    let addEle = document.getElementsByName('name')[0];
    let addName = document.getElementsByName('name')[0].value;

    if (
      !/^[A-Za-z0-9_-]{1,20}$/.test(addName) ||
      DBPanelsShow.dbs[addName]
    ) {
      addEle.parent().addClass('has-error');
      return;
    }

    var oldName = DBPanelsShow.current;
    if (oldName !== addName) {
      Object.defineProperty(DBPanelsShow.dbs, addName,
        Object.getOwnPropertyDescriptor(DBPanelsShow.dbs, oldName));
      delete DBPanelsShow.dbs[oldName];
    }
    DBPanelsShow.current = addName;

    localStorage.setItem('DBPanelsShow', JSON.stringify(DBPanelsShow));

    this.props.history.push('/config/status/'+addName);
    this.props.cancel();
  }

  cancel() {
    this.props.cancel();
  }

  render() {
    return (
      <div id="edit-dashboard" className="panel panel-default edit-dashboard">
        <div className='dashboard-title'>Edit Dashboard</div>
        <form name="edit-dashboard">
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" className="form-control" />
            <p className="help-block error-block">Invalid value, should match <br />regular expression {/*/^[A-Za-z0-9_-]{1,20}$/*/} <br />and be unique.</p>
          </div>
          <div className="form-group">
            <button data-submit="edit-dashboard" onClick={this.submit} className="btn btn-primary">Save</button>
            <button onClick={this.cancel} className="btn btn-default">Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

class DeleteDashboard extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);

    this.state = {
      // showMask: false,
      // showControls: false
    };
  }

  submit(e) {
    e.preventDefault();
    e.stopPropagation();

    let DBPanelsShow = JSON.parse(localStorage.DBPanelsShow);

    delete DBPanelsShow.dbs[DBPanelsShow.current];
    DBPanelsShow.current = 'Main';

    localStorage.setItem('DBPanelsShow', JSON.stringify(DBPanelsShow));

    this.props.history.push('/config/status/Main');
    this.props.cancel();
  }

  cancel() {
    this.props.cancel();
  }

  render() {
    return (
      <div id="delete-dashboard" className="panel panel-default delete-dashboard">
        <div className='dashboard-title'>Delete Dashboard</div>
        <form name="delete-dashboard">
          <div className="alert alert-warning" role="alert">
            <i className="fa fa-warning"></i>
            <div className="message-content">Are you sure you want to delete this dashboard?</div>
          </div>
          <div className="form-group">
            <button data-submit="delete-dashboard" onClick={this.submit} className="btn btn-primary">Delete</button>
            <button onClick={this.cancel} className="btn btn-default">Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

class ResetDashboard extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);

    this.state = {
      // showMask: false,
      // showControls: false
    };
  }

  submit(e) {
    e.preventDefault();
    e.stopPropagation();

    let DBPanelsShow = JSON.parse(localStorage.DBPanelsShow);

    DBPanelsShow = {current: 'Main', dbs: {Main: ['SystemInfo', 'HAInfo', 'Bandwidth', 'Sessions', 'LicenseInfo', 'CPU', 'Disk', 'RAM', 'SessionRate', 'RecentEventLogs']}};

    localStorage.setItem('DBPanelsShow', JSON.stringify(DBPanelsShow));

    this.props.history.push('/config/status/Main');
    this.props.cancel();
  }

  cancel() {
    this.props.cancel();
  }

  render() {
    return (
      <div id="reset-dashboard" className="panel panel-default reset-dashboard">
        <div className='dashboard-title'>Reset Dashboard</div>
        <form name="reset-dashboard">
          <div className="alert alert-danger" role="alert">
            <i className="fa fa-warning"></i>
            <div className="message-content">Are you sure you want to reset dashboards back to the default configuration? This will remove all existing global VDOM dashboards and widgets.</div>
          </div>
          <div className="form-group">
            <button data-submit="reset-dashboard" onClick={this.submit} className="btn btn-primary">Reset</button>
            <button onClick={this.cancel} className="btn btn-default">Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

class AddWidgets extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);

    this.state = {
      // showMask: false,
      // showControls: false
    };
  }

  componentDidMount() {
    let panelsShow = JSON.parse(localStorage.DBPanelsShow);
    document.querySelectorAll('input[type=checkbox]').forEach(function(item) {
      if(panelsShow.dbs[panelsShow.current].indexOf(item.value) !== -1) {
        item.checked = true;
      }
    });
  }

  submit(e) {
    e.preventDefault();
    e.stopPropagation();

    let DBPanelsShow = JSON.parse(localStorage.DBPanelsShow);

    DBPanelsShow.dbs[DBPanelsShow.current] = [];
    document.querySelectorAll('input[type=checkbox]').forEach(function(item) {
      if(item.checked) {
        DBPanelsShow.dbs[DBPanelsShow.current].push(item.value);
      }
    });

    localStorage.setItem('DBPanelsShow', JSON.stringify(DBPanelsShow));

    this.props.submit(DBPanelsShow);
    this.props.cancel();
  }

  cancel() {
    this.props.cancel();
  }

  render() {
    return (
      <div id="add-widget" className="panel panel-default add-widget">
        <div className='dashboard-title'>Add Widgets</div>
        <form name="add-widget">
          <div className='dashboard-fieldset'>System</div>
          <hr />
          <div className="row">
            <div className="col-lg-4">
              <span>
                <label>System Information</label>
                <label className="switch switch-flat">
                  <input ui="input" className="switch-input" type="checkbox" value="SystemInfo" />
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </label>
              </span>
            </div>
            <div className="col-lg-4">
             <span>
                <label>License Information</label>
                <label className="switch switch-flat">
                  <input ui="input" className="switch-input" type="checkbox" value="LicenseInfo" />
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </label>
              </span>
            </div>
            <div className="col-lg-4">
              <span>
                <label>HA Information</label>
                <label className="switch switch-flat">
                  <input ui="input" className="switch-input" type="checkbox" value="HAInfo" />
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </label>
              </span>
            </div>
          </div>

          <div className='dashboard-fieldset'>Resource Usage</div>
          <hr />
          <div className="row">
            <div className="col-lg-4">
              <span>
                <label>CPU</label>
                <label className="switch switch-flat">
                  <input ui="input" className="switch-input" type="checkbox" value="CPU" />
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </label>
              </span>
            </div>
            <div className="col-lg-4">
              <span>
                <label>RAM</label>
                <label className="switch switch-flat">
                  <input ui="input" className="switch-input" type="checkbox" value="Disk" />
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </label>
              </span>
            </div>
            <div className="col-lg-4">
              <span>
                <label>Disk</label>
                <label className="switch switch-flat">
                  <input ui="input" className="switch-input" type="checkbox" value="RAM" />
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </label>
              </span>
            </div>
          </div>

          <div className='dashboard-fieldset'>Monitor</div>
          <hr />
          <div className="row">
            <div className="col-lg-4">
              <span>
                <label>Interface Throughput</label>
                <label className="switch switch-flat">
                  <input ui="input" className="switch-input" type="checkbox" value="InterfaceThroughput" />
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </label>
              </span>
            </div>
            <div className="col-lg-4">
              <span>
                <label>Virtual Server Throughput</label>
                <label className="switch switch-flat">
                  <input ui="input" className="switch-input" type="checkbox" value="VSThroughput" />
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </label>
              </span>
            </div>
            <div className="col-lg-4">
              <span>
                <label>Virtual Server Connection</label>
                <label className="switch switch-flat">
                  <input ui="input" className="switch-input" type="checkbox" value="VSConnections" />
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </label>
              </span>
            </div>
            <div className="col-lg-4">
              <span>
                <label>Recent Event Logs</label>
                <label className="switch switch-flat">
                  <input ui="input" className="switch-input" type="checkbox" value="RecentEventLogs" />
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </label>
              </span>
            </div>
          </div>

          <div className="form-group">
            <button data-submit="add-widget" onClick={this.submit} className="btn btn-primary">Save</button>
            <button onClick={this.cancel} className="btn btn-default">Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Controls;
