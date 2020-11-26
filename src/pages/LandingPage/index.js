import React from 'react';
import {} from 'react-icons/fi';
import Button from '../../components/Button';
import {ContainerLanding} from './styles';
import InputComponent from '../../components/Input'




function Landing() {
return(
<ContainerLanding>

            
            <InputComponent placeholder="USERNAME" ></InputComponent>
            <InputComponent  placeholder="PASSWORD" ></InputComponent>
            

        <div className= 'button'>
            <Button title="LOGIN" hasError={false}></Button>
            <Button title="REGISTRAR-SE" hasError={false}></Button>
        </div>
</ContainerLanding>
)
}

export default Landing;