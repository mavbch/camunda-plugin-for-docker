FROM camunda/camunda-bpm-platform:tomcat-latest



COPY config.js /camunda/webapps/camunda/app/cockpit/scripts/
COPY clearAllInstance.js /camunda/webapps/camunda/app/cockpit/scripts/
COPY startInstance.js /camunda/webapps/camunda/app/cockpit/scripts/

