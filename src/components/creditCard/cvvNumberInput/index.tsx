import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';

interface CvvNumberInputDefaultProps {
    fieldLabel: string;
    placeholderText?: string;
    errorText?: string;
    ariaLabel?: string;
    onChangeHandler?: (ev: any) => void;
    error?: string | null;
}

const CvvNumberInput = (props: CvvNumberInputDefaultProps) => {
    const { fieldLabel, placeholderText, onChangeHandler, ariaLabel, error } =
        props;
    return (
        <>
            <FormLabel>{fieldLabel}</FormLabel>
            <FormControl
                placeholder={placeholderText}
                type="text"
                name="cvv"
                onChange={onChangeHandler}
                aria-label={ariaLabel}
            />
            {error && (
                // <FormControl.Feedback>
                <p>{error}</p>
                // </FormControl.Feedback>
            )}
        </>
    );
};

export default CvvNumberInput;
