export default Operator;
declare function Operator(props: any): JSX.Element;
declare namespace Operator {
    namespace propTypes {
        const name: PropTypes.Requireable<string>;
        const id: PropTypes.Requireable<string>;
        const label: PropTypes.Requireable<string>;
        const testId: PropTypes.Requireable<string>;
        const helperText: PropTypes.Requireable<string>;
        const metaObj: PropTypes.Requireable<object>;
    }
    namespace defaultProps {
        const name_1: string;
        export { name_1 as name };
        const id_1: string;
        export { id_1 as id };
        const label_1: null;
        export { label_1 as label };
        const testId_1: null;
        export { testId_1 as testId };
        const helperText_1: null;
        export { helperText_1 as helperText };
        const metaObj_1: null;
        export { metaObj_1 as metaObj };
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=Operator.d.ts.map