const tools = require("../functions.js");

module.exports = {
  admin: true,
  name: "addvideo",
  description: "Legg til ny oppgave/video i quizen",
  usage: "addvideo <url>",
  execute(message) {
    if(tools.isAllowedToIssueCommand(message)) {
      // TODO
    }
  },
};
