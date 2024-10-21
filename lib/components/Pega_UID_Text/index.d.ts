export default PegaUidText;
declare function PegaUidText(props: any): JSX.Element;
declare namespace PegaUidText {
    namespace defaultProps {
        const value: string;
        const placeholder: string;
        const disabled: boolean;
        const readOnly: boolean;
        const required: boolean;
        const testId: null;
    }
    namespace propTypes {
        export const label: PropTypes.Requireable<string>;
        const value_1: PropTypes.Requireable<string>;
        export { value_1 as value };
        const placeholder_1: PropTypes.Requireable<string>;
        export { placeholder_1 as placeholder };
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const disabled_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { disabled_1 as disabled };
        const readOnly_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { readOnly_1 as readOnly };
        const required_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { required_1 as required };
        const testId_1: PropTypes.Requireable<string>;
        export { testId_1 as testId };
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map