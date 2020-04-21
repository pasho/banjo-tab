export const width = 800;
export const lineSpacing = 10;
export const padding = () => 5 * lineSpacing;
export const staveHeight = () => lineSpacing * 4;
export const staveHeightWithPadding = () => staveHeight() + padding();
export const staveWidth = () => width - padding() * 2;
export const defaultBarsPerStave = 4;
// Accounts for font size and svg discrepancies.
export const textCharCentreOffset = {
  x: -3.5,
  y: 4
};
// Accounts for different widths of vertical and horizontal lines and ugly edges.
export const noteHorizontalLineAdjustment = 0.5;