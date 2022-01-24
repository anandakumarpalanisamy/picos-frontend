import { useState } from 'react';

import './proposal.component.css';
import { proposalState } from './proposal-initial-state';
import TextField from '../../components/TextField';
import TextArea from '../../components/TextArea';
import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';

const Proposal = () => {

    // Assign a initial Proposal state from an object
    const [proposal, setProposal ] = useState(proposalState());
    const { title, summary, network, price } = proposal;
    // Assign a initial state for errors
    // TODO: Might be good think to merge the error state into the proposal state itself.
    const [errors, setErrors] = useState({
        title: '',
        summary: '',
        network: '',
        price: ''
    });

    const validate = (name, value) => {
        switch (name) {
            case 'title':
            case 'summary':
                if (!value || value === '') {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        [name]: `Please enter a ${name} description.`
                    }));
                } else {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        [name]: ''
                    }));
                }
                break;
            case 'network':
                if (!value || value === 'Select option...' || value === '') {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        network: 'Please choose a network.'
                    }));
                } else {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        network: ''
                    }));
                }                
                break;
            case 'price':
                if (!value) {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        price: 'Please enter a price'
                    }));
                } else {
                    if (!new RegExp(/^-?[0-9]\d*\.?\d*$/).test(value)) {
                        console.log('Failed');
                        setErrors((prevErrors) => ({
                            ...prevErrors,
                            price: 'Please enter a valid price amount'
                        }));
                    } else {
                        setErrors((prevErrors) => ({
                            ...prevErrors,
                            price: ''
                        }));
                    }
                }
                break;
            default:
                break;
        }
    };

    const validForm = (errors) => {
        let valid = true;        
        Object.values(errors).forEach(            
            (val) => { console.log(val); return val.length > 0 && (valid = false) }
        );
        return valid;
    }

    const handleChange = (e, errors) => {
        validate(e.target.name, e.target.value, errors);
        setProposal({
            ...proposal, 
            [e.target.name]: { 
                ...proposal[e.target.name],
                value: e.target.value 
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // convenience methods to take only the form field and values that are required.
        const formValues = Object.keys(proposal)
            .map((key) => ({[key]: proposal[key].value}));
        const formData = formValues
            .reduce((obj, item) => Object.assign(obj, { ...item }), {});
        // Handle fresh page submit.
        for (let key in formData) {
            validate(key, formData[key]);
        }
        if (validForm(errors)) {           
            // Printing out the data
            console.log("Final Data", formData);
        } else {
            console.log("Form has errors. Please fix them!!")
        }
    }

    return(
        <div className='page-container'>
            <h1>Propose your next big thing to air on Picos!</h1>            
            <form className='form-container' onSubmit={handleSubmit}>
                <div className='form-field'>
                    <TextField { ...title } onChange={(e) => handleChange(e, errors)} />
                    <span className="error">{errors.title}</span>
                </div>
                <div className='form-field'>
                    <TextArea { ...summary } onChange={(e) => handleChange(e, errors)} />
                    <span className="error">{errors.summary}</span>
                </div>
                <div className='form-field'>
                    <Dropdown { ...network } onChange={(e) => handleChange(e, errors)} />
                    <span className="error">{errors.network}</span>
                </div>
                <div className='form-field'>
                    <TextField { ...price } onChange={(e) => handleChange(e, errors)} />
                    <span className="error">{errors.price}</span>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default Proposal;

