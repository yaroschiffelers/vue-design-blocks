/**
 * @fileoverview Vue-Design-Blocks build script.
 * Extracts the Froala Design Blocks from their source files and creates a new
 * single file Vue component for each block.
 *
 * @author Yaro Schiffelers (www.github.com/yaroschiffelers) - 2018
 * @license MIT
 *
 * @todo
 *     1. copy the content of the Froala assets source to './src/assets/verdor/froala-design-blocks' 
 *     2. change 'src' properties of component tags, point path to right asset folder (see 1.).
 */
'use strict'

const fs = require('fs')
const fse = require('fs-extra')
const cheerio = require('cheerio')
const upperFirst = require('lodash/upperFirst')
const camelCase = require('lodash/camelCase')

// Stores the different filenames (aka design block types).
const BLOCKTYPES = []

/**
 * Creates a Vue Design Block component file.
 */
class Composer {
    /**
     * Structure of the component object.
     * @param  {number} id      - Id of the component.
     * @param  {string} type    - Components design block type.
     * @param  {string} content - HTML content of the component.
     * @return {object}         - Component object.
     */
    constructor(id, type, content) {
        this.id = id
        this.type = type
        this.content = content
        this.componentName = ''
    }
    /**
     * Properly create a component.
     * @public
     */
    compose() {
        this.id += 1
        this.componentName = this.createComponentName()
        this.createComponentFile()
    }
    /**
     * Debugging
     * @public
     */
    logger() {
        console.log(this.id)
        console.log(this.type)
        console.log(this.content)
    }
    /**
     * Make sure the component name is formatted correctly,
     * so Vue won't throw any import errors.
     * @return {string}      - Vue compatible component name.
     * @private
     */
    createComponentName() {
        // First letter to upper case, camel case the rest
        // and remove any possible underscores.
        const vueName = upperFirst(camelCase(this.type.replace(/_/g, '')))
        return `${vueName}${this.id}`
    }
    /**
     * Vue Design Block component template. Formatted as single file Vue component.
     * The parsed block content will be injected in here.
     *
     * Note: the strange formating (indenting) of the return string is due to the fact
     * that otherwise the created component file wouldn't be properly indented.
     *
     * @return {string}           - composed single file Vue Design Block component.
     * @private
     */
    createComponentTemplate() {
        return `
<template>
  ${this.content}
</template>

<script>
export default {
    name: '${this.componentName}'
}
</script>

<style scoped>

</style>
        `.trim()
    }
    /**
     * Create a new .vue file with the components content
     * formatted as single file Vue component.
     * @return {string}           - status message.
     * @private
     */
    createComponentFile() {
        // prettier-ignore
        const filePath = `src/components/designblocks/${this.type}/${this.componentName}.vue`

        fs.writeFile(filePath, this.createComponentTemplate(), err => {
            // prettier-ignore
            return err
                ? console.error(err)
                : console.log(`success: ${this.componentName}.vue created`)
        })
    }
}

/**
 * Creates a directory if it does not exist. Handles some
 * edge cases that could result in error while trying to
 * determine whether a directory exists or nor and create that
 * directory at the same time.
 *
 * @credit
 * based on: https://stackoverflow.com/a/21196961 (by josh3736).
 *
 * @param  {string}   path - where the directory should be created.
 * @param  {Function} cb   - Callback function, returns an error object.
 * @return {Function}      - Callback function
 */
const dirEnsureExists = (path, cb) => {
    fs.mkdir(path, err => {
        !err ? cb(null) : err.code === 'EEXIST' ? cb(null) : cb(err)
    })
}

/**
 * Reads the Froala Design Blocks 'src' directory, gets
 * and parses the file names of each block.
 */
fs.readdirSync('./node_modules/froala-design-blocks/src/html').forEach(file => {
    file === 'index.html'
        ? false // Don't need the Froala homepage.
        : BLOCKTYPES.push(
              file
                  .trim() // Remove whitespace
                  .replace(/.html/g, '') // Remove .html
          )
})

/**
 * Copy the content of the Froala assets folder to our
 * own assets folder.
 */
fse
    .copy('./node_modules/froala-design-blocks/src/imgs', 'src/assets/vendor/froala')
    .then(() => console.log('success: Froala assets copied to the asset folder of this project.'))
    .catch(err => console.error(err))

/**
 * Create the root directory of the design block components.
 */
dirEnsureExists('src/components/designblocks', err => {
    err
        ? console.log(err)
        : console.log('success: component root directory created')
})

/**
 * Create the design block directories.
 */
BLOCKTYPES.forEach(type => {
    dirEnsureExists('src/components/designblocks/' + type, err => {
        err
            ? console.log(err)
            : console.log('success: ' + type + ' directory created')
    })
})

/**
 * Read the source file of each block and return its content,
 * run it trough cheerio to parse the content (data) of each component.
 * Pass that to Composer and build the .vue files.
 */
BLOCKTYPES.forEach(type => {
    // Get the Design Block source file.
    const data = fs.readFileSync(
        `./node_modules/froala-design-blocks/src/html/${type}.html`,
        'utf8'
    )

    // Let cheerio handle the data.
    const dom = cheerio.load(data)

    const parseAndCreate = (tagtype) => {
        dom(tagtype).each((i, elem) => {
            // Get the complete HTML content between the tag.
            const content = dom.html(elem)
            // Create a new Composer component object.
            const composer = new Composer(i, type, content)
            // Create the component file.
            composer.compose()
        })
    }

    if (type === 'headers') {
        parseAndCreate('header')
    } else if ( type === 'footers') {
        parseAndCreate('footer')
    } else {
        parseAndCreate('section')
    }
})

process.on('unhandledRejection', err => {
    process.stdout.write(err)
    process.exit(1)
})
