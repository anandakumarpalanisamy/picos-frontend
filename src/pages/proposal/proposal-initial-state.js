
/**
 * Method that returns the form structure of the Proposal object. 
 * Possible Future enhancement (TODO): This form fields could very well come from an API in real world.
 * 
 * @returns Object - indicative proposal form object for initial state
 */
export const proposalState = () => {
    return {
        title: {
            label: 'Title',
            value: '',
            name: 'title',
            placeholder: 'Enter the title of your next big podcast, programme.',
            disabled: false
        },
        summary: {
            label: 'Summary',
            value: '',
            rows: 25,
            name: 'summary',
            placeholder: 'Explain in the detail about your podcast or programme. Be descriptive!!!',
            disabled: false
        },
        network: {
            label: 'Network',
            value: '',
            options: [
                {
                    value: 'radio1',
                    label: 'Radio 1'
                },
                {
                    value: 'radio2',
                    label: 'Radio 2'
                },
                {
                    value: 'radio1Xtra',
                    label: 'Radio 1Xtra'
                },
                {
                    value: 'radio3',
                    label: 'Radio 3'
                },
                {
                    value: 'radio4',
                    label: 'Radio 4'
                },
                {
                    value: 'radio5',
                    label: 'Radio 5'
                },
                {
                    value: 'radio6Music',
                    label: 'Radio 6Music'
                },
            ],
            name: 'network',
            isClearable: true,
            disabled: false
        },
        price: {
            label: 'Price (per episode in GBP)',
            value: '',
            name: 'price',
            placeholder: 'Enter the price per edisode',
            disabled: false
        }
    }
};
