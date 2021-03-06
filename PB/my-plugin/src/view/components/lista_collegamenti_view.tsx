import React, {PureComponent} from 'react';
import {PanelOptionsGrid, PanelOptionsGroup, VerticalGroup, HorizontalGroup} from "@grafana/ui";
import Controller from "../../controller/controller";
import Observer from "./observer/observer";
//import {DataFrame} from "@grafana/data";

interface MyProps {
    controller: Controller
}

class ListaCollegamentiView extends PureComponent<MyProps> implements Observer{
    update(): void {
        this.forceUpdate();
    }

    handleDelete=(e:any)=>{
        if(confirm("Scollegare il collegamento?")){
            this.props.controller.removeListPredictorQuery(e.target.id);
        }
    }

    showConnection=()=>{
        let objNameList=this.props.controller.getConnections();
        let viewNameList=[];
        if(objNameList.length=== 0)
            return <label style={{fontStyle: "italic"}}>Nessun collegamento inserito.</label>
        else {
            for (let i=0;i<objNameList.length;i++) {
                let id=objNameList[i].id;
                let name=objNameList[i].name;
                let list=objNameList[i].queries;
                viewNameList.push(
                    <div>
                        <HorizontalGroup>
                            <label>{name}:</label>
                            <button id={id} className='btn btn-secondary btn-sm'>Modifica collegamento</button>
                            <button id={id} onClick={this.handleDelete} className='btn btn-secondary btn-sm'>Elimina Collegamento</button>
                        </HorizontalGroup>
                        <p>
                            {list.map((list:any) => <p>{list.predictor} ---> {list.query}</p>)}
                        </p>
                    </div>

                );
            }

            return viewNameList;
        }
    }

    render() {

        return (
            <div>
                <PanelOptionsGrid>

                    <PanelOptionsGroup title="Lista collegamenti">
                        <VerticalGroup>
                            <p style={{fontStyle: "italic"}}>Legenda: Predittore ---> Query</p>
                            {this.showConnection()}
                        </VerticalGroup>

                    </PanelOptionsGroup>

                </PanelOptionsGrid>
            </div>
        );
    }
}

export default ListaCollegamentiView;
