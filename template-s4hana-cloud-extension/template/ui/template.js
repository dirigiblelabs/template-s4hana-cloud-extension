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

exports.getSources = function(parameters) {
	var sources = [];
	sources = sources.concat(getUi(parameters));
	return sources;
};

function getUi(parameters) {
	return [{
		location: "/template-s4hana-cloud-extension/index.html.template", 
		rename: "index.html",
		action: "generate",
		engine: "velocity"
	}, {
		location: "/template-s4hana-cloud-extension/ui/Component.js.template", 
		rename: "ui/Component.js",
		action: "generate",
		engine: "velocity"
	}, {
		location: "/template-s4hana-cloud-extension/ui/manifest.json.template", 
		rename: "ui/manifest.json",
		action: "generate",
		engine: "velocity"
	}, {
		location: "/template-s4hana-cloud-extension/ui/controller/App.controller.js.template", 
		rename: "ui/controller/App.controller.js",
		action: "generate",
		engine: "velocity",
		collection: "models"
	}, {
		location: "/template-s4hana-cloud-extension/ui/controller/Details.controller.js.template", 
		rename: "ui/controller/Details.controller.js",
		action: "generate",
		engine: "velocity"
	}, {
		location: "/template-s4hana-cloud-extension/ui/css/style.css.template", 
		rename: "ui/css/style.css",
		action: "generate",
		engine: "velocity"
	}, {
		location: "/template-s4hana-cloud-extension/ui/fragments/CreateEntity.fragment.xml.template", 
		rename: "ui/fragments/CreateEntity.fragment.xml",
		action: "generate",
		engine: "velocity",
		collection: "models"
	}, {
		location: "/template-s4hana-cloud-extension/ui/util/Config.js.template", 
		rename: "ui/util/Config.js",
		action: "generate",
		engine: "velocity"
	}, {
		location: "/template-s4hana-cloud-extension/ui/view/App.view.xml.template", 
		rename: "ui/view/App.view.xml",
		action: "generate",
		engine: "velocity",
		collection: "models"
	}, {
		location: "/template-s4hana-cloud-extension/ui/view/Details.view.xml.template", 
		rename: "ui/view/Details.view.xml",
		action: "generate",
		engine: "velocity",
		collection: "models"
	}];
}