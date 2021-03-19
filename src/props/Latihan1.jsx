import React, {Component} from 'react';
import Props1 from '../Component/Props1';

// statefull
class Latihan1 extends Component {
    render() {
        return (
            <div>
                <p>Mari kita belajar React, jangan lupa berdoa biar ilmunya berkah. Bismillah</p>
                <hr/>
                <Props1
                    title="Hello"
                    name="Moris Setiawan"
                    jenis="saya kucing" />
                <Props1
                    title="Holla"
                    name="Didi Kempong"
                    jenis="gedruk" />
            </div>
        )
    }
}

export default Latihan1;