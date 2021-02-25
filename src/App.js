import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
    render() {
        const characters = [
            {
                name: 'Vishal',
                job: 'Full Stack Developer',
            },
            {
                name: 'Nidhi',
                job: 'Java Developer',
            },
            {
                name: 'Shanaya',
                job: 'Student',
            },
            {
                name: 'Kabir',
                job: 'Student',
            },
            {
                name: 'Ravi',
                job: 'Db Manager',
            }
        ]
    
        return(
            <div className="container">
                <Table characterData = {characters}/>
            </div>
        )
    }
}

export default App;