console.log("turbo-eureka");

document.write("<h1>turbo-eureka</h1>");

window.parent.postMessage(
  {
    name: window.name,
    type: "PluginHeightCheck",
    height: window.document.body.clientHeight,
  },
  "*"
);
window.parent.postMessage(
  { name: window.name, type: "PluginRegisterEvent", slot: slot },
  "task-details"
);
