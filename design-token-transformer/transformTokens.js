import StyleDictionary from "style-dictionary"


import { readFile } from 'fs/promises';
const baseConfig = JSON.parse(
  await readFile(
    new URL('./config.json', import.meta.url)
  )
);


StyleDictionary.registerTransform({
	name: "size/px",
	type: "value",
	matcher: (token) => {
		return (
			(token.unit === "pixel" || token.type === "dimension") &&
			token.value !== 0
		)
	},
	transformer: (token) => {
		return `${token.value}px`
	},
})

StyleDictionary.registerTransform({
	name: "size/percent",
	type: "value",
	matcher: (token) => {
		return token.unit === "percent" && token.value !== 0
	},
	transformer: (token) => {
		return `${token.value}%`
	},
})

StyleDictionary.registerTransformGroup({
	name: "custom/js",
	transforms: StyleDictionary.transformGroup["js"].concat([
		"size/px",
		"size/percent",
	]),
})

StyleDictionary.registerFilter({
	name: "validToken",
	matcher: function (token) {
		return ["dimension", "string", "number", "color"].includes(token.type)
	},
})

const StyleDictionaryExtended = StyleDictionary.extend(baseConfig)

StyleDictionaryExtended.buildAllPlatforms()
