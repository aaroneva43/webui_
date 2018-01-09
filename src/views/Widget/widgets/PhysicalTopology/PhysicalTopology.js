import React, { Component } from 'react';
import * as d3 from 'd3';
import './styles.scss'

class PhysicalTopology extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupTitle: '',
      popupList: []
    };
  }

  componentDidMount() {
    let that = this,
      status = {};

    status = {"group_id": 28, "mode": "active-passive", "local_state": "Master", "cfg_sync_state": "In Sync", "cfg_src": "Y", "local_sn": "FAD3HD3A17000053", "local_nodeid": 0, "local_address": "169.254.129.220", "last_changed_status_time": "Mon Dec 11 11:40:40 2017\n", "last_changed_status_reason": "Device initialization", "l4_sync_session_persis_send_pkts": 0, "l4_sync_session_persis_recv_pkts": 0, "l7_sync_persist_send_pkts": 0, "l7_sync_persist_recv_pkts": 0, "dup_node_id_cnt": 0, "verson_missmatch": 0, "peers": [{"peer_state": "Slave", "peer_cfg_src": "N", "peer_sn": "FAD3HD3A17000041", "peer_nodeid": 0, "peer_address": "169.254.143.124"}], "system-state": {"disk_state": "Pass"}, "ha-link-status": {"up-list": [], "down-list": []}};

    let payload =  [{"_nondeletable":0,"_noneditable":0,"address":"5.114.1.1","address6":"::","mkey":"rs1","status":"enable"},{"_nondeletable":0,"_noneditable":0,"address":"5.114.1.2","address6":"::","mkey":"rs2","status":"enable"},{"_nondeletable":0,"_noneditable":0,"address":"5.114.1.3","address6":"::","mkey":"rs3","status":"enable"},{"_nondeletable":0,"_noneditable":0,"address":"5.114.1.4","address6":"::","mkey":"rs4","status":"enable"},{"_nondeletable":0,"_noneditable":0,"address":"5.114.1.5","address6":"::","mkey":"rs5","status":"enable"},{"_nondeletable":0,"_noneditable":0,"address":"5.114.1.6","address6":"::","mkey":"rs6","status":"enable"},{"_nondeletable":0,"_noneditable":0,"address":"5.114.1.7","address6":"::","mkey":"rs7","status":"enable"},{"_nondeletable":0,"_noneditable":0,"address":"5.114.1.8","address6":"::","mkey":"rs8","status":"enable"},{"_nondeletable":0,"_noneditable":0,"address":"5.114.1.9","address6":"::","mkey":"rs9","status":"enable"},{"_nondeletable":0,"_noneditable":0,"address":"5.114.1.10","address6":"::","mkey":"rs10","status":"enable"},{"_nondeletable":0,"_noneditable":0,"address":"5.114.1.11","address6":"::","mkey":"rs11","status":"enable"},{"_nondeletable":0,"_noneditable":0,"address":"5.114.1.12","address6":"::","mkey":"rs12","status":"enable"},{"_nondeletable":0,"_noneditable":0,"address":"5.114.1.13","address6":"::","mkey":"rs13","status":"enable"},{"_nondeletable":0,"_noneditable":0,"address":"5.114.1.14","address6":"::","mkey":"rs14","status":"enable"},{"_nondeletable":0,"_noneditable":0,"address":"5.114.1.15","address6":"::","mkey":"rs15","status":"enable"},{"_nondeletable":0,"_noneditable":0,"address":"5.114.1.16","address6":"::","mkey":"rs16","status":"enable"}];

    var postData = [];
    _.each(payload, function(item, index) {
      postData[index] = {
        name: item.mkey,
        size: 10,
        os: 'apple'
      };
    });

    that.drawChart({
      status: status,
      rs: {
        name: 'rserver',
        children: postData
      }
    });
  }

  drawChart(data) {
    var that = this,
      diameter = 360,
      format = d3.format(',d'),
      color = d3.scale.category20c(),
      biggestTextWidth = 0,
      scale = 1,
      paths = {
        cloud: 'M1984 1152q0 159-112.5 271.5t-271.5 112.5h-1088q-185 0-316.5-131.5t-131.5-316.5q0-132 71-241.5t187-163.5q-2-28-2-43 0-212 150-362t362-150q158 0 286.5 88t187.5 230q70-62 166-62 106 0 181 75t75 181q0 75-41 138 129 30 213 134.5t84 239.5z',
        server: 'M128 1408h1024v-128h-1024v128zm0-512h1024v-128h-1024v128zm1568 448q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zm-1568-960h1024v-128h-1024v128zm1568 448q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zm0-512q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zm96 832v384h-1792v-384h1792zm0-512v384h-1792v-384h1792zm0-512v384h-1792v-384h1792z',
        apple: 'M1585 1215q-39 125-123 250-129 196-257 196-49 0-140-32-86-32-151-32-61 0-142 33-81 34-132 34-152 0-301-259-147-261-147-503 0-228 113-374 113-144 284-144 72 0 177 30 104 30 138 30 45 0 143-34 102-34 173-34 119 0 213 65 52 36 104 100-79 67-114 118-65 94-65 207 0 124 69 223t158 126zm-376-1173q0 61-29 136-30 75-93 138-54 54-108 72-37 11-104 17 3-149 78-257 74-107 250-148 1 3 2.5 11t2.5 11q0 4 .5 10t.5 10z',
        windows: 'M746 1006v651l-682-94v-557h682zm0-743v659h-682v-565zm982 743v786l-907-125v-661h907zm0-878v794h-907v-669z',
        linux: 'M791 411q-11 1-15.5 10.5t-8.5 9.5q-5 1-5-5 0-12 19-15h10zm87 14q-4 1-11.5-6.5t-17.5-4.5q24-11 32 2 3 6-3 9zm-351 427q-4-1-6 3t-4.5 12.5-5.5 13.5-10 13q-10 11-1 12 4 1 12.5-7t12.5-18q1-3 2-7t2-6 1.5-4.5.5-4v-3l-1-2.5-3-2zm855 359q0-18-55-42 4-15 7.5-27.5t5-26 3-21.5.5-22.5-1-19.5-3.5-22-4-20.5-5-25-5.5-26.5q-10-48-47-103t-72-75q24 20 57 83 87 162 54 278-11 40-50 42-31 4-38.5-18.5t-8-83.5-11.5-107q-9-39-19.5-69t-19.5-45.5-15.5-24.5-13-15-7.5-7q-14-62-31-103t-29.5-56-23.5-33-15-40q-4-21 6-53.5t4.5-49.5-44.5-25q-15-3-44.5-18t-35.5-16q-8-1-11-26t8-51 36-27q37-3 51 30t4 58q-11 19-2 26.5t30 .5q13-4 13-36v-37q-5-30-13.5-50t-21-30.5-23.5-15-27-7.5q-107 8-89 134 0 15-1 15-9-9-29.5-10.5t-33 .5-15.5-5q1-57-16-90t-45-34q-27-1-41.5 27.5t-16.5 59.5q-1 15 3.5 37t13 37.5 15.5 13.5q10-3 16-14 4-9-7-8-7 0-15.5-14.5t-9.5-33.5q-1-22 9-37t34-14q17 0 27 21t9.5 39-1.5 22q-22 15-31 29-8 12-27.5 23.5t-20.5 12.5q-13 14-15.5 27t7.5 18q14 8 25 19.5t16 19 18.5 13 35.5 6.5q47 2 102-15 2-1 23-7t34.5-10.5 29.5-13 21-17.5q9-14 20-8 5 3 6.5 8.5t-3 12-16.5 9.5q-20 6-56.5 21.5t-45.5 19.5q-44 19-70 23-25 5-79-2-10-2-9 2t17 19q25 23 67 22 17-1 36-7t36-14 33.5-17.5 30-17 24.5-12 17.5-2.5 8.5 11q0 2-1 4.5t-4 5-6 4.5-8.5 5-9 4.5-10 5-9.5 4.5q-28 14-67.5 44t-66.5 43-49 1q-21-11-63-73-22-31-25-22-1 3-1 10 0 25-15 56.5t-29.5 55.5-21 58 11.5 63q-23 6-62.5 90t-47.5 141q-2 18-1.5 69t-5.5 59q-8 24-29 3-32-31-36-94-2-28 4-56 4-19-1-18-2 1-4 5-36 65 10 166 5 12 25 28t24 20q20 23 104 90.5t93 76.5q16 15 17.5 38t-14 43-45.5 23q8 15 29 44.5t28 54 7 70.5q46-24 7-92-4-8-10.5-16t-9.5-12-2-6q3-5 13-9.5t20 2.5q46 52 166 36 133-15 177-87 23-38 34-30 12 6 10 52-1 25-23 92-9 23-6 37.5t24 15.5q3-19 14.5-77t13.5-90q2-21-6.5-73.5t-7.5-97 23-70.5q15-18 51-18 1-37 34.5-53t72.5-10.5 60 22.5zm-628-827q3-17-2.5-30t-11.5-15q-9-2-9 7 2 5 5 6 10 0 7 15-3 20 8 20 3 0 3-3zm419 197q-2-8-6.5-11.5t-13-5-14.5-5.5q-5-3-9.5-8t-7-8-5.5-6.5-4-4-4 1.5q-14 16 7 43.5t39 31.5q9 1 14.5-8t3.5-20zm-178-213q0-11-5-19.5t-11-12.5-9-3q-6 0-8 2t0 4 5 3q14 4 18 31 0 3 8-2 2-2 2-3zm54-233q0-2-2.5-5t-9-7-9.5-6q-15-15-24-15-9 1-11.5 7.5t-1 13-.5 12.5q-1 4-6 10.5t-6 9 3 8.5q4 3 8 0t11-9 15-9q1-1 9-1t15-2 9-7zm565 1341q20 12 31 24.5t12 24-2.5 22.5-15.5 22-23.5 19.5-30 18.5-31.5 16.5-32 15.5-27 13q-38 19-85.5 56t-75.5 64q-17 16-68 19.5t-89-14.5q-18-9-29.5-23.5t-16.5-25.5-22-19.5-47-9.5q-44-1-130-1-19 0-57 1.5t-58 2.5q-44 1-79.5 15t-53.5 30-43.5 28.5-53.5 11.5q-29-1-111-31t-146-43q-19-4-51-9.5t-50-9-39.5-9.5-33.5-14.5-17-19.5q-10-23 7-66.5t18-54.5q1-16-4-40t-10-42.5-4.5-36.5 10.5-27q14-12 57-14t60-12q30-18 42-35t12-51q21 73-32 106-32 20-83 15-34-3-43 10-13 15 5 57 2 6 8 18t8.5 18 4.5 17 1 22q0 15-17 49t-14 48q3 17 37 26 20 6 84.5 18.5t99.5 20.5q24 6 74 22t82.5 23 55.5 4q43-6 64.5-28t23-48-7.5-58.5-19-52-20-36.5q-121-190-169-242-68-74-113-40-11 9-15-15-3-16-2-38 1-29 10-52t24-47 22-42q8-21 26.5-72t29.5-78 30-61 39-54q110-143 124-195-12-112-16-310-2-90 24-151.5t106-104.5q39-21 104-21 53-1 106 13.5t89 41.5q57 42 91.5 121.5t29.5 147.5q-5 95 30 214 34 113 133 218 55 59 99.5 163t59.5 191q8 49 5 84.5t-12 55.5-20 22q-10 2-23.5 19t-27 35.5-40.5 33.5-61 14q-18-1-31.5-5t-22.5-13.5-13.5-15.5-11.5-20.5-9-19.5q-22-37-41-30t-28 49 7 97q20 70 1 195-10 65 18 100.5t73 33 85-35.5q59-49 89.5-66.5t103.5-42.5q53-18 77-36.5t18.5-34.5-25-28.5-51.5-23.5q-33-11-49.5-48t-15-72.5 15.5-47.5q1 31 8 56.5t14.5 40.5 20.5 28.5 21 19 21.5 13 16.5 9.5z'
      };

    d3.select('svg').remove();

    var zoom = d3.behavior.zoom()
      .scaleExtent([1, 10])
      .on("zoom", zoomed);

    var svg = d3.select('.physical').append('svg')
      .attr('width', '100%')
      .attr('height', diameter + 10)
      .attr('class', 'topo');
    // .call(zoom);

    var cloud = svg.append('g')
      .attr('class', 'cloud');

    cloud.append('g')
      .attr('class', 'icon-path cloud-path')
      .append('path')
      .attr('d', function(d) {
        return paths.cloud;
      })
      .style('fill', function() {
        return 'rgb(49, 130, 189)';
      });

    cloud.append('text')
      .attr('x', 30)
      .attr('y', 70)
      .attr('fill', 'white')
      .text('Upstream');

    var servers = svg.append('g')
      .attr('class', 'servers');

    var server = servers.append('g')
      .attr('class', 'server');

    server.append("rect")
      .attr("x", -21)
      .attr("y", 2)
      .attr("width", 54)
      .attr("height", 46)
      .attr("fill", 'transparent')
      .on('mouseover', function(d) {
        mouseoverserver({
          y: 50,
          status: data.status
        });
      })
      .on('mouseout', mouseout);

    server.append('g')
      .attr('class', 'icon-path server-path')
      .attr('transform', 'translate(-21,0)')
      .append('path')
      .attr('d', paths.server)
      .style('pointer-events', 'none')
      .style('fill', function() {
        return 'rgb(49, 130, 189)';
      });

    server.append('text')
      .attr('y', 70)
      .style('text-anchor', 'middle')
      .text(data.status.local_sn)
      .each(function() {
        if (this.getComputedTextLength() > biggestTextWidth) {
          biggestTextWidth = this.getComputedTextLength();
        }
      });

    if (data.status.peers) {
      _.each(data.status.peers, function(item, index) {
        var y_loc = (index + 1) * 100
        var server = servers.append('g')
          .attr('transform', 'translate(0,' + y_loc + ')')
          .attr('class', 'server');

        server.append("rect")
          .attr("x", -21)
          .attr("y", 2)
          .attr("width", 54)
          .attr("height", 46)
          .attr("fill", 'transparent')
          .on('mouseover', function(d) {
            mouseoverserver({
              y: y_loc + 50,
              status: item
            });
          })
          .on('mouseout', mouseout);

        server.append('g')
          .attr('class', 'icon-path server-path')
          .attr('transform', 'translate(-21,0)')
          .append('path')
          .attr('d', paths.server)
          .style('pointer-events', 'none')
          .style('fill', function() {
            return 'rgb(49, 130, 189)';
          });

        server.append('text')
          .attr('y', 70)
          .style('text-anchor', 'middle')
          .style('pointer-events', 'none')
          .text(item.peer_sn)
          .each(function() {
            if (this.getComputedTextLength() > biggestTextWidth) {
              biggestTextWidth = this.getComputedTextLength();
            }
          });
      });
    }

    // server brackets
    var bracketsHeight = (data.status.peers ? data.status.peers.length + 1 : 1) * 90;
    var lineData = [{
        'x': -50,
        'y': -10
      },
      {
        'x': -(biggestTextWidth + 20) / 2,
        'y': -10
      },
      {
        'x': -(biggestTextWidth + 20) / 2,
        'y': bracketsHeight
      },
      {
        'x': -50,
        'y': bracketsHeight
      }
    ];

    var lineData2 = [{
        'x': 50,
        'y': -10
      },
      {
        'x': (biggestTextWidth + 20) / 2,
        'y': -10
      },
      {
        'x': (biggestTextWidth + 20) / 2,
        'y': bracketsHeight
      },
      {
        'x': 50,
        'y': bracketsHeight
      }
    ];

    var lineFunction = d3.svg.line()
      .x(function(d) {
        return d.x;
      })
      .y(function(d) {
        return d.y;
      })
      .interpolate('linear');

    servers.append('path')
      .attr('d', lineFunction(lineData))
      .attr('stroke', 'gray')
      .attr('fill', 'none');

    servers.append('path')
      .attr('d', lineFunction(lineData2))
      .attr('stroke', 'gray')
      .attr('fill', 'none');
    // \server brackets

    // linsk
    var links = svg.append('g')
      .attr('class', 'links');
    var diagonal = d3.svg.diagonal()
      .source(function(d) {
        return {
          x: d[0].y,
          y: d[0].x
        };
      })
      .target(function(d) {
        return {
          x: d[1].y,
          y: d[1].x
        };
      })
      .projection(function(d) {
        return [d.y, d.x];
      });
    var linkData = [{
      x: 130,
      y: 60
    }, {
      x: 340 - 20 - (biggestTextWidth / 2),
      y: 40 + ((data.status.peers ? data.status.peers.length + 1 : 1) * 100) / 2
    }];
    var linkData2 = [{
      x: 340 + 20 + (biggestTextWidth / 2),
      y: 40 + ((data.status.peers ? data.status.peers.length + 1 : 1) * 100) / 2
    }, {
      x: 590,
      y: 182
    }];

    links.append('path')
      .datum(linkData)
      .attr('class', 'link')
      .attr('d', diagonal)
      .attr('stroke', 'black');

    links.append('path')
      .datum(linkData2)
      .attr('class', 'link')
      .attr('d', diagonal)
      .attr('stroke', 'black');

    var bubbles = svg.append('g')
      .attr('class', 'bubbles');

    bubbles.append('circle')
      .attr('cx', 180)
      .attr('cy', 182)
      .attr('r', 182)
      .style('stroke', function(d) {
        return 'gray';
      })
      .style('fill', 'transparent');

    var bubble = d3.layout.pack()
      .size([diameter, diameter])
      .padding(1.5);

    var node = bubbles.selectAll('.node')
      .data(bubble.nodes(classes(data.rs))
        .filter(function(d) {
          return !d.children;
        }))
      .enter().append('g')
      .attr('class', 'node')
      .attr('transform', function(d) {
        return 'translate(' + d.x + ',' + d.y + ')';
      });

    node.append('circle')
      .attr('r', function(d) {
        return d.r;
      })
      .style('fill', function(d) {
        return color(d.packageName);
      })
      .on('mouseover', mouseover)
      .on('mouseout', mouseout);

    node.append('text')
      .attr('dy', '.3em')
      .style('text-anchor', 'middle')
      .style('pointer-events', 'none')
      .style('fill', '#fff')
      .text(function(d) {
        if (d.className) {
          return d.className.substring(0, d.r / 4);
        }
        return null;
      });

    // node.append('g')
    //     .attr('class', function(d) {
    //         return 'icon-path ' + d.os + '-path';
    //     })
    //     .append('path')
    //     .attr('d', function(d) {
    //         return paths[d.os];
    //     })
    //     .style('pointer-events', 'none')
    //     .style('fill', '#fff');

    // Returns a flattened hierarchy containing all leaf nodes under the root.
    function classes(root) {
      var classes = [];

      function recurse(name, node) {
        if (node.children) node.children.forEach(function(child) {
          recurse(node.name, child);
        });
        else classes.push({
          packageName: name,
          className: node.name,
          value: node.size,
          os: node.os
        });
      }
      recurse(null, root);
      return {
        children: classes
      };
    }

    function zoomed() {
      var s = d3.event.scale;
      scale = s;
      // svg.attr("transform", "scale(" + s + ")");
      svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }

    function mouseover(d) {
      const getTopDistance = function(offset, adjust) {
        var scrollTop = document.querySelector('.main').scrollTop;
        return offset + scrollTop + adjust;
      };

      const getLeftDistance = function(offset, adjust) {
        var leftMargin = parseInt(window.getComputedStyle(document.querySelector('.physical')).marginLeft);
        return offset + leftMargin + adjust;
      };

      clearTimeout(that.popupRef); //needed
      that.popupRef = setTimeout(function() {
        // app.remote({
        //   entity: 'fortiview',
        //   _method: 'phy_realserver_info',
        //   params: {
        //     vdom: app.vdom,
        //     mkey: d.className
        //   }
        // }).done(function(data, textStatus, jqXHR) {
          var load = {"current_sessions":12,"total_sessions":293,"in_bytes":28261,"out_bytes":328341,"app_response":1,"new_http_req":0,"Server_avg_rtt":1};
          document.querySelector('#popupPhysical')
            .setAttribute('style', 'top:' + getTopDistance((d.y * scale), 60) + 'px' + '; ' +
            'left: ' + getLeftDistance((d.x * scale), 620) + 'px' + '; ' +
            'width: 300px; height: 240px; opacity: 1');
          that.setState({
            popupTitle: d.className,
            popupList: [
              { label: 'Server Avg RTT', value: load.Server_avg_rtt },
              { label: 'App Response', value: load.app_response },
              { label: 'Current Sessions', value: load.current_sessions },
              { label: 'In Bytes', value: load.in_bytes },
              { label: 'Out Bytes', value: load.out_bytes },
              { label: 'New HTTP Request', value: load.new_http_req },
              { label: 'Total Sessions', value: load.total_sessions }
            ]
          });
        // }).fail(function(jqXHR, textStatus, errorThrown) {
        //   console.log(this.url, errorThrown);
        // });
      }, 500);
    }

    function mouseoverserver(d) {
      const getTopDistance = function(offset, adjust) {
        var scrollTop = document.querySelector('.main').scrollTop;
        return offset + scrollTop + adjust;
      };

      const getLeftDistance = function(offset, adjust) {
        var leftMargin = parseInt(window.getComputedStyle(document.querySelector('.physical')).marginLeft);
        return offset + leftMargin + adjust;
      };

      clearTimeout(that.popupRef);
      clearTimeout(that.popupCloseRef);
      that.popupRef = setTimeout(function() {
        document.querySelector('#popupPhysical')
          .setAttribute('style', 'top:' + getTopDistance(d.y, 60) + 'px' + '; ' +
          'left: ' + getLeftDistance(380, 0) + 'px' + '; ' +
          'width: 300px; height: 240px; opacity: 1');
        that.setState({
          popupTitle: (d.status.local_sn || d.status.peer_sn),
          popupList: [
            { label: 'Serial Number', value: (d.status.local_sn || d.status.peer_sn) },
            { label: 'State', value: (d.status.local_state || d.status.peer_state) }
          ]
        });
      }, 500);
    }

    function mouseout(d) {
      clearTimeout(this.popupRef);
      clearTimeout(this.popupCloseRef);
      this.popupCloseRef = setTimeout(function() {
        document.querySelector('#popupPhysical').style.opacity = 0;
      }, 500);
    }

    function wrap() {
      var self = d3.select(this),
        textLength = self.node().getComputedTextLength(),
        text = self.text();
      while (textLength > document.querySelectorAll(this).attr('tmx') && text.length > 0) {
        text = text.slice(0, -1);
        self.text(text + '...');
        textLength = self.node().getComputedTextLength();
      }
    }
  }

  render() {
    return (
      <div className="widget">
        <div className="regional grid-header clearfix">
          <div className="pull-left">
            <button type="button" className="btn btn-default pull-right" action="onRefresh"><i className="fa fa-refresh"></i> <span data-i18n-key="*">Refresh</span></button>
          </div>
        </div>
        <DetailsPopup title={this.state.popupTitle} list={this.state.popupList} />
        <div className="physical"></div>
      </div>
    );
  }
}

class DetailsPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      list: []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.title,
      list: nextProps.list
    });
  }

  render() {
    const popupItem = (item, key) => {
      return (
        <div key={key} className="tree-info-item"><b>{item.label}:</b> <span>{item.value}</span></div>
      )
    };

    const popupList = (items) => {
      if(Array.isArray(items)) {
        return items.map( (item, index) => popupItem(item, index) );
      }
    };

    return (
      <div id="popupPhysical" className="details-popup">
        <div className="pop_header">
          <div className="pop_title">{ this.state.title }</div>
        </div>
        <div className="pop_state">
          {popupList(this.state.list)}
        </div>
      </div>
    )
  }
}

export default PhysicalTopology;
