/*
 * Copyright (c) 2010-2020 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */
var apiTemplate = require("template-s4hana-cloud-extension/template/api/template");
var uiTemplate = require("template-s4hana-cloud-extension/template/ui/template");

exports.getTemplate = function(parameters) {
	return {
		name: "S/4HANA Cloud Extension Application (OpenUI5)",
		description: "S/4HANA Cloud Extension Application with S4/HANA system connectivity, REST Services and an OpenUI5 User Interface",
		model: "true",
		sources: getSources(parameters),
		parameters: [{
			name: "url",
			label: "URL",
			placeholder: "S/4 HANA system URL",
			ui: {
				hide: {
					property: "destinationEnabled",
					value: true
				}
			}
		}, {
			name: "authToken",
			label: "Auth Token",
			placeholder: "S/4 HANA system Authentication Token",
			ui: {
				hide: {
					property: "destinationEnabled",
					value: true
				}
			}
		}, {
			name: "destinationName",
			label: "Destination Name",
			placeholder: "S/4 HANA system Destination Name",
			ui: {
				hide: {
					property: "destinationEnabled",
					value: false
				}
			}
		}, {
			name: "destinationEnabled",
			label: "Destination",
			type: "checkbox"
		}]
	};
};

function getSources(parameters) {
	var sources = [];
	sources = sources.concat(apiTemplate.getSources(parameters));
	sources = sources.concat(uiTemplate.getSources(parameters));
	return sources;
}