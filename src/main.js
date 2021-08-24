import {app} from 'electron'
import SerialPort from 'serialport'
SerialPort.list().then((res)=>{
    console.log(res);
})