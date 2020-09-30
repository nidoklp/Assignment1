import React from 'react';
import TableRow from './TableRow';


class Table extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            rows: [{index: 0, name: "charlie", job:"Manager"}, {index: 1, name: "Mac", job:"Lead"},{index: 1, name: "Denniss", job:"Developer"}],
            rowIndex: 1,
            name:'',
            job:''
        }

        this.addRow = this.addRow.bind(this)
        this.removeRow = this.removeRow.bind(this)
    }

   addRow () {
        var {rows, rowIndex} = this.state
        rows[rowIndex] = {index: rowIndex, name: this.state.name, job:this.state.job};
        rowIndex = rowIndex + 1;
        this.setState({rows, rowIndex}) 
        // Or 
        // this.setState({rows: rows, rowIndex : rowIndex})
    }

    removeRow(index){
        var {rows} = this.state
        if(rows.length > 1){
            rows.splice(index, 1);
        }

        this.setState({rows})
    }

    handleUsernameChange = (event) => {
        this.setState({
            name : event.target.value
        })
    }

    handleJobChange = (event) => {
        this.setState({
            job : event.target.value
        })
    }

    render() {
        return (
            <div className="row">
            <div className="col-md-6">
                <div className="table-responsive">
                   <table className="table">
                    <thead>
                        <tr>
                            <th>Sl.No.</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.rows.map((row, index) => 
                                <TableRow key={index} row={row} rowindex = {index + 1} handleRemove={this.removeRow}></TableRow>
                            )
                        }

                    </tbody>
                  </table>
               </div>
              </div>              
              <div className="col-md-5">
                  <div className="form-group">
                      <label style={{float:"left"}}>Name</label>
                      <input type='text' className="form-control" value={this.state.name} onChange={this.handleUsernameChange}/>
                  </div>
                  <div className="form-group">
                      <label style={{float:"left"}}>Job</label>
                      <input type='text' className="form-control" value={this.state.job} onChange={this.handleJobChange}/>
                  </div>
                 <button className="btn btn-primary" onClick={this.addRow}>Submit</button>
              </div>  
            </div>
        )
    }
}

export default Table

