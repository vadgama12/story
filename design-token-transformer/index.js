import * as tokens from "./dist/js/generated-tokens.js"
import fs from "fs"

const lightMode = {
  colors: {},
  shadows: {},
}
const darkMode = {
  colors: {},
  shadows: {},
}
const common = {}

for (const key in tokens) {
  if (Object.hasOwnProperty.call(tokens, key)) {
    const value = tokens[key]

    const lightColorIdentifier = "M3SysLight"
    const darkColorIdentifier = "M3SysDark"
    const lightReadOnlyIdentifier = "M3ReadOnlyLight"
    const darkReadOnlyIdentifier = "M3ReadOnlyDark"
    const lightElevationIdentifier = "M3ElevationLight"
    const darkElevationIdentifier = "M3ElevationDark"

    // can&will be improved

    const isLightColor = key.includes(lightColorIdentifier)
    const isLightReadOnly = key.includes(lightReadOnlyIdentifier)
    const isLightElevation = key.includes(lightElevationIdentifier)

    const isDarkColor = key.includes(darkColorIdentifier)
    const isDarkReadOnly = key.includes(darkReadOnlyIdentifier)
    const isDarkElevation = key.includes(darkElevationIdentifier)

    if (isLightColor) {
      lightMode.colors[key.split(lightColorIdentifier)[1]] = value
    } else if (isLightReadOnly) {
      lightMode.colors[key.split(lightReadOnlyIdentifier)[1]] = value
    } else if (isLightElevation) {
      lightMode.shadows[`Elevation${key.split(lightElevationIdentifier)[1]}`] =
        value
    } else if (isDarkColor) {
      darkMode.colors[key.split(darkColorIdentifier)[1]] = value
    } else if (isDarkReadOnly) {
      darkMode.colors[key.split(darkReadOnlyIdentifier)[1]] = value
    } else if (isDarkElevation) {
      darkMode.shadows[`Elevation${key.split(darkElevationIdentifier)[1]}`] =
        value
    } else common[key] = value
  }
}

const themeString = `
export const lightMode = ${JSON.stringify(lightMode, null, 2)};

export const darkMode = ${JSON.stringify(darkMode, null, 2)};

export const common = ${JSON.stringify(common, null, 2)};  
`

fs.writeFileSync("../lib/src/appTheme/tokens.ts", themeString)
console.log("✔ tokens generated successfully.")
