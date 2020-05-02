
import React, {PureComponent} from 'react';
import {PanelEditorProps} from "@grafana/data";
import {Tab, TabContent, TabsBar} from "@grafana/ui";
import InsJson from "./components/inputJson";
import InserimentoDB from "./components/db_tab";
import {UseState} from "./UseState";


interface MyPanelOptions {
    bitText:string;
}

const tabs = [
    { label: 'Inserisci JSON', key: 'first', active: true },
    { label: 'Inserisci DB', key: 'second', active: false },
];



class MyPanelEditor extends PureComponent<PanelEditorProps<MyPanelOptions>>{


    render() {
        return(
            <UseState initialState={tabs}>
                {(state, updateState) => {
                    return (
                        <div>
                            <TabsBar>
                                {state.map((tab, index) => {
                                    return (
                                        <Tab
                                            key={index}
                                            label={tab.label}
                                            active={tab.active}
                                            onChangeTab={() => updateState(state.map((tab, idx) => ({ ...tab, active: idx === index })))}
                                        />
                                    );
                                })}
                            </TabsBar>
                            <TabContent>
                                {state[0].active && <InsJson/>}
                                {state[1].active && <InserimentoDB queries={this.props.data.series}/>}
                            </TabContent>
                        </div>
                    );
                }}
            </UseState>
        );
    }
}

export default MyPanelEditor;