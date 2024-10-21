export default PegaUidTimeOfDay;
declare function PegaUidTimeOfDay(props: any): JSX.Element;
declare namespace PegaUidTimeOfDay {
    namespace defaultProps {
        const value: undefined;
        const withSeconds: boolean;
        const validatemessage: string;
        const helperText: string;
        const hideLabel: boolean;
        const disabled: boolean;
        const readOnly: boolean;
        const required: boolean;
        const pickerInterval: string;
        const clockFormat: number;
        const testId: null;
        const additionalProps: {};
        const displayMode: null;
        const variant: string;
        const formatter: string;
    }
    namespace propTypes {
        const value_1: PropTypes.Requireable<string>;
        export { value_1 as value };
        export const label: PropTypes.Validator<string>;
        const hideLabel_1: PropTypes.Requireable<boolean>;
        export { hideLabel_1 as hideLabel };
        const withSeconds_1: PropTypes.Requireable<boolean>;
        export { withSeconds_1 as withSeconds };
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const validatemessage_1: PropTypes.Requireable<string>;
        export { validatemessage_1 as validatemessage };
        const helperText_1: PropTypes.Requireable<string>;
        export { helperText_1 as helperText };
        const disabled_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { disabled_1 as disabled };
        const readOnly_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { readOnly_1 as readOnly };
        const required_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { required_1 as required };
        const pickerInterval_1: PropTypes.Requireable<string>;
        export { pickerInterval_1 as pickerInterval };
        const clockFormat_1: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        export { clockFormat_1 as clockFormat };
        const testId_1: PropTypes.Requireable<string>;
        export { testId_1 as testId };
        const additionalProps_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { additionalProps_1 as additionalProps };
        const displayMode_1: PropTypes.Requireable<string>;
        export { displayMode_1 as displayMode };
        const variant_1: PropTypes.Requireable<string>;
        export { variant_1 as variant };
        const formatter_1: PropTypes.Requireable<string>;
        export { formatter_1 as formatter };
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map