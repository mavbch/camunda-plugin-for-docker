export default {

  id: "clearAllInstancePlugin",
  pluginPoint: "cockpit.processDefinition.runtime.action",


  render: (node, { api, processDefinitionId }) => {
    node.innerHTML = '<button class="btn btn-default action-button" style="width: 55px; margin-top: 5px;">clear</button>';
    node.onclick = function () {
      console.log("clear process" + processDefinitionId);

      fetch(api.engineApi + "/process-instance?processDefinitionId=" + processDefinitionId + "&active=false&suspended=false&withIncident=false&withoutTenantId=false&processDefinitionWithoutTenantId=false&rootProcessInstances=false&leafProcessInstances=false&variableNamesIgnoreCase=false&variableValuesIgnoreCase=false", {
        method: 'get',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": api.CSRFToken,
        },
      }).then(
        async (res) => {
          var result = await res.json();
          console.log(result);

          var resultLength = Object.keys(result).length;

          for (var i = 0; i < resultLength; i++) {
            console.log(" Deleting id " + result[i].id);

            fetch(api.engineApi + "/process-instance/" + result[i].id + "?skipCustomListeners=true&skipIoMappings=true&skipSubprocesses=false&failIfNotExists=false", {
              method: 'delete',
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-XSRF-TOKEN": api.CSRFToken,
              }
            });
            console.log("Done");
            window.location.reload;
          }
        });
    }
  }
}
