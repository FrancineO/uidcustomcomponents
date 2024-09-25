declare function FormattedText(props: any): JSX.Element;
declare namespace FormattedText {
    namespace defaultProps {
        const formatType: string;
        const variant: string;
        const value: undefined;
        const label: string;
        const testId: null;
        const hideLabel: boolean;
        const additionalProps: {};
    }
    namespace propTypes {
        const formatType_1: PropTypes.Requireable<string>;
        export { formatType_1 as formatType };
        const variant_1: PropTypes.Requireable<string>;
        export { variant_1 as variant };
        const value_1: PropTypes.Requireable<NonNullable<string | number | boolean | null | undefined>>;
        export { value_1 as value };
        const label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        const testId_1: PropTypes.Requireable<string>;
        export { testId_1 as testId };
        const additionalProps_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { additionalProps_1 as additionalProps };
        const hideLabel_1: PropTypes.Requireable<boolean>;
        export { hideLabel_1 as hideLabel };
    }
}
export default FormattedText;
import PropTypes from "prop-types";
//# sourceMappingURL=FormattedText.d.ts.map