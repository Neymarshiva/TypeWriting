import Table from "../../ui/Table.jsx";
import { useMachines } from "./useMachines.js";
import MachineRow from "./MachineRow.jsx";
function MachineTable() {
    const { isLoading, machines } = useMachines();
    if (isLoading) return "Loading";
    
    return (
        <>
            <Table columns="0.7fr 2fr 2fr">
                <Table.Header>
                    <div>SI NO</div>
                    <div>Machine Number</div>
                    <div>Language</div>
                </Table.Header> 
                <Table.Body
                    data={machines}
                    render={(machine) => <MachineRow machine={machine} key={machine.id} />}
                />
            </Table >
        </>

    )
}


export default MachineTable;