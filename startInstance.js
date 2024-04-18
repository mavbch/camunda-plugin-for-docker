export default {
  
    id: "startProcessPlugin",
    pluginPoint: "cockpit.processDefinition.runtime.action",
  
    render: (node, { api, processDefinitionId }) => {

      node.innerHTML = `<button class="btn btn-default action-button" style="width: 55px; margin-top: 5px;">start</button>`;
      node.onclick = function() {
      console.log(api.engineApi + "/process-definition/" + processDefinitionId  + "/start");
        fetch(api.engineApi + "/process-definition/" + processDefinitionId  + "/start", {
          method: 'post',
          body: '{}',
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": api.CSRFToken,
          },
        })
      }
    },
  };