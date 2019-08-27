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
    "项目名字": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "描述": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "作者": {
      "type": "string",
      "message": "Author"
    },
    "其他信息": {
      "type": "string",
      "message": "其他信息",
      "default": "hello"
    }
  },
  "filters": {
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
