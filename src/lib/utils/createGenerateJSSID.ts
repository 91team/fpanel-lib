import { CreateGenerateIdOptions, GenerateId, Rule, StyleSheet } from 'jss'
import warning from 'tiny-warning'

const globalThis =
  typeof window !== 'undefined' && window.Math === Math
    ? window
    : typeof self !== 'undefined' && self.Math === Math
    ? self
    : // eslint-disable-next-line no-new-func
      Function('return this')()
const ns = '2f1acc6c3a606b082e5eef5e54414ffb'
const moduleId = (globalThis[ns] = 0)
const maxRules = 1e10

interface ICreateGenerateIdOptions extends CreateGenerateIdOptions {
  withID?: boolean
}

// https://github.com/cssinjs/jss/blob/master/packages/jss/src/utils/createGenerateId.js
export const createGenerateID: (
  options?: ICreateGenerateIdOptions
) => GenerateId = (options = {}) => {
  let ruleCounter = 0

  return (rule: Rule, sheet?: StyleSheet): string => {
    ruleCounter += 1

    if (ruleCounter > maxRules) {
      warning(
        false,
        `[JSS] You might have a memory leak. Rule counter is at ${ruleCounter}.`
      )
    }

    let jssId = ''
    let prefix = ''

    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix = sheet.options.classNamePrefix
      }

      if (options.withID && sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id)
      }
    }

    if (options.minify) {
      // Using "c" because a number can't be the first char in a class name.
      return `${prefix || 'c'}${moduleId}${jssId}${ruleCounter}`
    }

    return `${prefix + rule.key}-${moduleId}${
      jssId ? `-${jssId}` : ''
    }-${ruleCounter}`
  }
}
