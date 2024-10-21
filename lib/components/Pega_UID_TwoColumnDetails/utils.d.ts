/**
 * Given the PConnect object of a Template component, retrieve the children
 * metadata of all regions.
 * @param {Function} pConnect PConnect of a Template component.
 */
export function getAllFields(pConnect: Function): any;
export function getFilteredFields(getPConnect: any): any[];
/**
 * Returns ConfigurableLayout mapped content. With pre-populated default layout configs.
 * @param {object[]} regionData template children item.
 * @returns {object[]} ConfigurableLayout content.
 */
export function getLayoutDataFromRegion(regionData: object[]): object[];
/**
 * Determine if the current view is the view of the case step/assignment.
 * @param {Function} pConnect PConnect object for the component
 */
export function getIsAssignmentView(pConnect: Function): boolean;
/**
 * A hook that gets the instructions content for a view.
 * @param {Function} pConnect PConnect object for the component
 * @param {string} [instructions="casestep"] 'casestep', 'none', or the html content of a Rule-UI-Paragraph rule (processed via core's paragraph annotation handler)
 */
export function getInstructions(pConnect: Function, instructions?: string | undefined): any;
//# sourceMappingURL=utils.d.ts.map