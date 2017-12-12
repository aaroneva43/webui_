import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import { Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Link } from 'react-router-dom'

import css from './Navigator.css'


import _ from 'lodash'

class Navigator extends React.PureComponent {

    static propTypes = {
        location: PropTypes.object.isRequired,
        menuData: PropTypes.array
    }

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }


    /**
     * prepare menu data for renderring
     * @param {Array} menuData 
     * @param {String} selectedPath 
     */
    decorateMenuData(menuData, selectedPath) {

        if (!menuData || !menuData.length) return {}



        const decorate = (menu, url, depth, paths) => {
            let o = {}


            if (paths[0] == 'config') paths.shift()

            try {

                _.extend(o, _.omit(menu, 'modules', 'children'))

                o.depth = depth

                if ((!menu.widget && !menu.gid) || menu.widget == 'MultipleModulesConfig') {  // is catagory
                    o.cat = true
                    o.url = menu.name == 'root' ? '/config' : (url + '/' + menu.name)

                } else {
                    o.url = url + '/' + menu.name
                    o.isModule = true

                    // save the module in an outter array
                    modules.push(o)
                }

                let children = menu.modules || menu.children || []

                if (children.length) {
                    let selectedChild = children.find((itm) => { return itm.name === paths[0] })

                    if (selectedChild) {
                        o.selectedChild = selectedChild.name
                        o.selectedChildText = selectedChild.text
                        paths.shift()

                    }
                    o.children = children.map((itm) => { return decorate(itm, o.url, o.depth + 1, paths) })
                }



            } catch (error) {
                console.error(error)
            }

            return o
        }

        /**
         * setup module url to its parent catagories
         */
        const setupCatUrl = (menuData, modules) => {

            const setup = (menu, url) => {

                if (menu.cat && RegExp('^' + menu.url + '.+$').test(url) && !menu.selected) {
                    menu.url = url
                    menu.selected = true
                }


                _.castArray(menu.children || []).forEach((itm) => {
                    setup(itm, url)
                })
            }

            // 1st setup selectedPath 
            setup(menuData, selectedPath)

            // 2nd setup url of the first module of each catagory
            modules.forEach(function (itm) {
                setup(menuData, itm.url)
            }, this);
        }


        let root = {
            name: 'root',
            label: 'root',
            url: '/',
            selected: true,
            children: menuData
        }

        const modules = []

        const paths = ((selectedPath.match(/[^\/].+[^\/]/g) || [])[0] || '').split('/')

        root = decorate(root, '', 0, paths)
        setupCatUrl(root, modules)

        console.log(root)

        return root
    }




    render() {

        const me = this

        const { location, menuData } = this.props

        const menu = me.decorateMenuData(menuData, location.pathname)

        const renderMenu = (menu) => {

            if (!menu) return

            return (
                <div >
                    {
                        menu.depth === 0 &&
                        <Nav pills className={'navbar'}>
                            <Dropdown title={<span>{menu.selectedChildText}</span>} nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle nav caret>
                                    {menu.selectedChildText}
                                </DropdownToggle>
                                <DropdownMenu>
                                    {

                                        (menu.children || []).map((itm) => {
                                            return <DropdownItem
                                                key={itm.name}
                                                className={itm.url == location.pathname ? 'navbar' : 'navbar'}
                                            >
                                                <Link to={itm.url}>{itm.text}</Link>
                                            </DropdownItem>
                                        })


                                    }
                                </DropdownMenu>

                            </Dropdown>
                            {
                                _.get((menu.children || []).find(itm => itm.name === menu.selectedChild), 'children', []).map((itm) => {
                                    return <NavItem
                                        className={itm.url == location.pathname ? 'navbar active' : 'navbar'}
                                        key={itm.name}
                                    >
                                        <Link to={itm.url}>{itm.text}</Link>
                                    </NavItem>
                                })


                            }


                        </Nav>
                    }

                    {
                        menu.depth > 1 && menu.children &&
                        <Nav pills style={{ height: 32 }}>
                            {

                                (menu.children || []).map((itm) => {
                                    return <NavItem
                                        style={{ height: 32, lineHeight: '32px' }}
                                        key={itm.name}
                                        className={itm.url == location.pathname ? 'navbar' : 'navbar'}
                                    >
                                        <Link to={itm.url}>{itm.text}</Link>
                                    </NavItem>
                                })


                            }
                        </Nav>
                    }

                    {renderMenu((menu.children || []).find(itm => itm.name === menu.selectedChild))}

                </div >

            )


        }


        return _.isArray(menuData) && menuData.length ? renderMenu(menu) : ''
    }

}

export default Navigator
