module.exports = {

  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "项目名字"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "描述",
      "default": "一些描述"
    },
    "author": {
      "type": "string",
      "message": "作者",
      "default": "SHEN"
    },
    "vuex": {
      "type": "confirm",
      "message": "包含 vuex?"
    },

  },
  "filters": {
    "src/store/**/*": "vuex",
    "src/util/**/*": "vuex",
    "NOTE": "vuex"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
