/**
 * @fileoverview register every Design Block Component as global Vue component.
 * @credits chrisvfritz <https://github.com/chrisvfritz/vue-enterprise-boilerplate/blob/master/src/components/_globals.js>
 */
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// Require the components. 
// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
    // Look for files in the designblock directory.
    './components/designblocks',
    // Including subdirectories.
    true,
    // Only include .vue files 
    /.vue$/
)

// For each matching file name...
requireComponent.keys().forEach(fileName => {

  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the PascalCase version of the component name
  const componentName = upperFirst(
    camelCase(
      fileName
        // Remove the "./_" from the beginning
        .replace(/^\.\/_/, '')
        // Remove the file extension from the end
        .replace(/\.\w+$/, '')
    )
  )

  console.log(componentName)
  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})
