import React, {Component} from 'react';
import SystemInfo from './widgets/SystemInfo';
import CPU from './widgets/CPU';
import Disk from './widgets/Disk';
import HAInfo from './widgets/HAInfo';
import RAM from './widgets/RAM';
import LicenseInfo from './widgets/LicenseInfo';
import RecentEventLogs from './widgets/RecentEventLogs';
import VSThroughput from './widgets/VSThroughput';
import InterfaceThroughput from './widgets/InterfaceThroughput';
import VSConnections from './widgets/VSConnections';
import Controls from './Controls';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Status.scss';

const reorder = (list, startCol, endCol, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result[startCol].splice(startIndex, 1);
  result[endCol].splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (draggableStyle, isDragging) => ({
  userSelect: 'none',

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightgray' : 'transparent'
});

class Status extends Component {
  constructor(props) {
    super(props);

    this.onDragEnd = this.onDragEnd.bind(this);

    this.state = {
      panels: JSON.parse(localStorage.getItem('DBPanels')) ||
      [
        ['SystemInfo', 'HAInfo', 'VSThroughput', 'InterfaceThroughput', 'LicenseInfo'],
        ['CPU', 'Disk', 'RAM', 'VSConnections', 'RecentEventLogs']
      ],
      panelsShow: JSON.parse(localStorage.DBPanelsShow)
    };
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    let panelsShow = JSON.parse(localStorage.DBPanelsShow);
    if (nextProps.match.params.id2 !== panelsShow.current) {
      panelsShow.current = nextProps.match.params.id2;
      localStorage.setItem("DBPanelsShow", JSON.stringify(panelsShow));
      this.setState({
        panelsShow
      });
    }
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const panels = reorder(
      this.state.panels,
      result.source.droppableId === 'droppable' ? 0 : 1,
      result.destination.droppableId === 'droppable' ? 0 : 1,
      result.source.index,
      result.destination.index
    );

    localStorage.setItem('DBPanels', JSON.stringify(panels));
    this.setState({
      panels
    });
  }

  handleSubmit(panelsShow) {
    this.setState({
      panelsShow
    });
  }

  handleClose(panel) {
    let panelsShow = JSON.parse(localStorage.DBPanelsShow);
    panelsShow.dbs[panelsShow.current].splice(panelsShow.dbs[panelsShow.current].indexOf(panel), 1)
    localStorage.setItem("DBPanelsShow", JSON.stringify(panelsShow));
    this.setState({
      panelsShow
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="row">
            <div className="col">
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    {this.state.panels[0].filter(item => {
                      if( this.state.panelsShow.dbs[this.state.panelsShow.current].indexOf(item) === -1 ) {
                        return false
                      }
                      return true
                    }).map(panel => (
                      <Draggable key={panel} draggableId={panel}>
                        {(provided, snapshot) => {
                          // let MyPanel = panel;
                          return (
                          <div>
                            <div
                              ref={provided.innerRef}
                              style={getItemStyle(
                                provided.draggableStyle,
                                snapshot.isDragging
                              )}
                              {...provided.dragHandleProps}
                            >
                              <MyPanel tag={panel} close={ this.handleClose.bind(this) } />
                            </div>
                            {provided.placeholder}
                          </div>
                        )}}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
            <div className="col">
              <Droppable droppableId="droppable2">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    {this.state.panels[1].filter(item => {
                      if( this.state.panelsShow.dbs[this.state.panelsShow.current].indexOf(item) === -1 ) {
                        return false
                      }
                      return true
                    }).map(panel => (
                      <Draggable key={panel} draggableId={panel}>
                        {(provided, snapshot) => {
                          // let MyPanel = panel;
                          return (
                          <div>
                            <div
                              ref={provided.innerRef}
                              style={getItemStyle(
                                provided.draggableStyle,
                                snapshot.isDragging
                              )}
                              {...provided.dragHandleProps}
                            >
                              <MyPanel tag={panel} close={ this.handleClose.bind(this) } />
                            </div>
                            {provided.placeholder}
                          </div>
                        )}}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        </DragDropContext>
        <Controls submit={ this.handleSubmit.bind(this) } {...this.props} />
      </div>
    )
  }
}

class MyPanel extends Component {
  handleClose(panel) {
    this.props.close(panel);
  }

  render() {
    const components = {
      SystemInfo,
      CPU,
      Disk,
      HAInfo,
      RAM,
      LicenseInfo,
      RecentEventLogs,
      VSThroughput,
      InterfaceThroughput,
      VSConnections
    };
    const TagName = components[this.props.tag];

    return <TagName close={ this.handleClose.bind(this) } />
  }
}

export default Status;
