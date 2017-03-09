import React, {Component} from 'react';

import PageHeader from './PageHeader';
import Waypoint from 'react-waypoint';

import MyButtonSection from './my-section/MyButtonSection';
import MyNavbar from './my-bootstrap-elements/MyNavbar';


const sections = {
    buttons: '#buttons',
    btnGroups: '#btn-groups',
    dropdowns: '#btn-dropdowns',
    menuitems: '#menu-items',
}

class ScrollSpy extends Component {
    render() {

        const {href, onBefore, onAfter} = this.props;
        return (
                <Waypoint
                    onEnter={({ previousPosition }) => (
                    previousPosition === Waypoint.above && onBefore(href)
                    )}
                    onLeave={({ currentPosition }) => (
                    currentPosition === Waypoint.above && onAfter(href)
                    )}
                    topOffset={10}
                    bottomOffset={-10}
                    />
                        )
            }

        }
        

        class ComponentsPage extends Component {

            renderScrollSpy(href) {
                return (
                        <ScrollSpy
                            href={href}
                            onBefore={this.onBefore}
                            onAfter={this.onAfter}
                            />
                        );
            }

            onBefore(href) {
                this.afterSections[href] = false;
                this.updateActiveHref();
            }

            onAfter(href) {
                this.afterSections[href] = true;
                this.updateActiveHref();
            }

            updateActiveHref() {
                if (this.updateActiveHrefHandle != null) {
                    return;
                }

                this.updateActiveHrefHandle = setTimeout(() => {
                    this.updateActiveHrefHandle = null;
                    this.setActiveNavItem();
                });
            }

            render() {
                return (
                        <div>
                    
                            <h1>My component page</h1>
                            <PageHeader
                                title="My Header Components"
                                subTitle="Bootstrap"
                                />
                    
                            <div ref="main" className="container bs-docs-container">
                                <div className="row">
                                    <div className="col-md-9" role="main">
                                        main
                                        {this.renderScrollSpy(sections.buttons)}
                                         <MyButtonSection />
                                         <MyNavbar />
                                    </div>
                                    <div className="col-md-3 bs-docs-sidebar-holder">
                                        sidebar
                                    </div>
                                </div>
                            </div>
                    
                        </div>
                        )
            }
        }

        export default ComponentsPage;


