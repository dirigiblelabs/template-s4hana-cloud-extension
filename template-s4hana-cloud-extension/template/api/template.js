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
	sources = sources.concat(getApi(parameters));
	return sources;
};

function getApi(parameters) {
	return [{
		location: "/template-s4hana-cloud-extension/api/entity.js.template", 
		rename: "api/{{dataName}}.js",
		action: "generate",
		engine: "velocity",
		collection: "models"
	}];
}