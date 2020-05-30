import React, {PureComponent} from 'react';
import {
    PanelOptionsGrid,
    PanelOptionsGroup,
    VerticalGroup,
    HorizontalGroup,
    Button,
    ConfirmButton

} from "@grafana/ui";
import {DataFrame} from "@grafana/data";
import {Predictor} from "../../types";


interface MyProps {
    queries: DataFrame[]
    predictors: Predictor[]
}


class CollegamentoView extends PureComponent<MyProps> {

    getOptions = (queries: DataFrame[]) => {
        if (queries.length > 0) {
            return <>{queries.map((query) => <option value={query.name}>{query.name}</option>)}</>
        } else
            return <option value="noQ">No query found</option>
    }

    getPredictors = (predictors: any) => {
        if (predictors.length === 0) {
            return <option value="noJ">No json loaded</option>
        } else {
            return predictors.map((pred: any, index: number) => {
                console.log(index)
                return <option value={index}>{pred.name}</option>;
            })
        }
    }


    render() {
        const {predictors, queries} = this.props;
        return (
            <div>
                <PanelOptionsGrid>
                    <PanelOptionsGroup title="Lista predittori">
                        <VerticalGroup>
                            <p>Selezionare uno o più predittori dalla lista</p>
                            <HorizontalGroup spacing="md">
                                <label htmlFor="predictors">Select predictors:</label>
                                <select>
                                    {this.getPredictors(predictors)}
                                </select>
                            </HorizontalGroup>
                        </VerticalGroup>

                    </PanelOptionsGroup>

                    <PanelOptionsGroup title="Selezione del flusso dati">
                        <h1>TO DO: </h1>
                        <label htmlFor="queries">Select query:</label>
                        <select id="queries">
                            {this.getOptions(queries)}
                        </select>
                        <ul>
                            <li>
                                <p>migliorare componente della lista delle query disponibili;</p>
                            </li>
                        </ul>
                    </PanelOptionsGroup>

                    <PanelOptionsGroup title="Impostazione soglie">
                        <h1>TO DO: </h1>
                        <ul>
                            <li>
                                <p>aggiungere componente per impostazione soglie.</p>
                            </li>
                        </ul>
                    </PanelOptionsGroup>

                    <PanelOptionsGroup title="Conferma Collegamento">

                        <VerticalGroup spacing={"lg"}>
                            <ConfirmButton onConfirm={confirm}>Conferma collegamento</ConfirmButton>
                            <Button>Visualizza Collegamenti</Button>
                            <Button>Visualizza Collegamenti</Button>
                            <h1>TO DO: </h1>
                            <ul>
                                <li>
                                    <p>aggiungere button per conferma collegamento("Aggiunge il collegamento alla lista").</p>
                                </li>
                                <li>
                                    <p>aggiungere reference a visualizzazione lista collegamenti.</p>
                                </li>
                            </ul>

                        </VerticalGroup>

                    </PanelOptionsGroup>


                </PanelOptionsGrid>

            </div>


        );
    }
}

export default CollegamentoView;

//Readd to matching group "Flusso dati"
//<InserimentoDB />