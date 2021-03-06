const { printMessage } = require('./utils')

module.exports = {
  prompts: {
    needOrgName: {
      type: 'confirm',
      message: 'Does your Quasar App Extension ext-id have an organization name? Eg. your ext-id should be like "@my-org/my-ext" instead of simply "my-ext"',
      default: false
    },
    orgName: {
      when: 'needOrgName',
      type: 'input',
      message: 'Organization name of the Quasar App Extension, eg. "my-org" if the ext-id should be "@my-org/my-ext"',
      validate: val => val && val.length > 0
    },
    name: {
      type: 'input',
      message: 'Quasar App Extension ext-id (without "quasar-app-extension" prefix), eg. "my-ext" if the ext-id should be "@my-org/my-ext" or "my-ext"',
      validate: val => val && val.length > 0
    },

    description: {
      type: 'input',
      message: 'Project description',
      default: 'A Quasar App Extension'
    },

    author: {
      type: 'input',
      message: 'Author'
    },

    license: {
      type: 'input',
      message: 'License type',
      default: 'MIT'
    },

    preset: {
      type: 'checkbox',
      message: 'Pick the needed scripts:',
      choices: [
        {
          name: 'Prompts script',
          value: 'prompts'
        },
        {
          name: 'Install script',
          value: 'install'
        },
        {
          name: 'Uninstall script',
          value: 'uninstall'
        }
      ]
    },

    repositoryType: {
      type: 'input',
      message: 'Repository type',
      default: 'git'
    },
    repositoryURL: {
      type: 'input',
      message: 'Repository URL (eg: https://github.com/quasarframework/quasar)'
    },
    homepage: {
      type: 'input',
      message: 'Homepage URL'
    },
    bugs: {
      type: 'input',
      message: 'Issue reporting URL (eg: https://github.com/quasarframework/quasar/issues)'
    }
  },

  filters: {
    'src/install.js': 'preset.install',
    'src/prompts.js': 'preset.prompts',
    'src/uninstall.js': 'preset.uninstall'
  },

  complete: function(data, { chalk }) {
    printMessage(data, chalk)
  }
}
