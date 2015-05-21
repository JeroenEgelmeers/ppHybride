(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Session
 * @header lbServices.Session
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Session` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Session",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Sessions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Session.owner() instead.
        "prototype$__get__owner": {
          url: urlBase + "/Sessions/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use Session.participants.findById() instead.
        "prototype$__findById__participants": {
          url: urlBase + "/Sessions/:id/participants/:fk",
          method: "GET"
        },

        // INTERNAL. Use Session.participants.destroyById() instead.
        "prototype$__destroyById__participants": {
          url: urlBase + "/Sessions/:id/participants/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Session.participants.updateById() instead.
        "prototype$__updateById__participants": {
          url: urlBase + "/Sessions/:id/participants/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Session.issues.findById() instead.
        "prototype$__findById__issues": {
          url: urlBase + "/Sessions/:id/issues/:fk",
          method: "GET"
        },

        // INTERNAL. Use Session.issues.destroyById() instead.
        "prototype$__destroyById__issues": {
          url: urlBase + "/Sessions/:id/issues/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Session.issues.updateById() instead.
        "prototype$__updateById__issues": {
          url: urlBase + "/Sessions/:id/issues/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Session.participants() instead.
        "prototype$__get__participants": {
          isArray: true,
          url: urlBase + "/Sessions/:id/participants",
          method: "GET"
        },

        // INTERNAL. Use Session.participants.create() instead.
        "prototype$__create__participants": {
          url: urlBase + "/Sessions/:id/participants",
          method: "POST"
        },

        // INTERNAL. Use Session.participants.destroyAll() instead.
        "prototype$__delete__participants": {
          url: urlBase + "/Sessions/:id/participants",
          method: "DELETE"
        },

        // INTERNAL. Use Session.participants.count() instead.
        "prototype$__count__participants": {
          url: urlBase + "/Sessions/:id/participants/count",
          method: "GET"
        },

        // INTERNAL. Use Session.issues() instead.
        "prototype$__get__issues": {
          isArray: true,
          url: urlBase + "/Sessions/:id/issues",
          method: "GET"
        },

        // INTERNAL. Use Session.issues.create() instead.
        "prototype$__create__issues": {
          url: urlBase + "/Sessions/:id/issues",
          method: "POST"
        },

        // INTERNAL. Use Session.issues.destroyAll() instead.
        "prototype$__delete__issues": {
          url: urlBase + "/Sessions/:id/issues",
          method: "DELETE"
        },

        // INTERNAL. Use Session.issues.count() instead.
        "prototype$__count__issues": {
          url: urlBase + "/Sessions/:id/issues/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Session#create
         * @methodOf lbServices.Session
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Session` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Sessions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Session#upsert
         * @methodOf lbServices.Session
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Session` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Sessions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Session#exists
         * @methodOf lbServices.Session
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Sessions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Session#findById
         * @methodOf lbServices.Session
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Session` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Sessions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Session#find
         * @methodOf lbServices.Session
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Session` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Sessions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Session#findOne
         * @methodOf lbServices.Session
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Session` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Sessions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Session#updateAll
         * @methodOf lbServices.Session
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Sessions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Session#deleteById
         * @methodOf lbServices.Session
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Sessions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Session#count
         * @methodOf lbServices.Session
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Sessions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Session#prototype$updateAttributes
         * @methodOf lbServices.Session
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Session` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Sessions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Session#generateKey
         * @methodOf lbServices.Session
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `id` – `{string}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `key` – `{number=}` - 
         */
        "generateKey": {
          url: urlBase + "/Sessions/:id/generateKey",
          method: "PUT"
        },

        // INTERNAL. Use JiraUser.owned_sessions.findById() instead.
        "::findById::JiraUser::owned_sessions": {
          url: urlBase + "/JiraUsers/:id/owned_sessions/:fk",
          method: "GET"
        },

        // INTERNAL. Use JiraUser.owned_sessions.destroyById() instead.
        "::destroyById::JiraUser::owned_sessions": {
          url: urlBase + "/JiraUsers/:id/owned_sessions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use JiraUser.owned_sessions.updateById() instead.
        "::updateById::JiraUser::owned_sessions": {
          url: urlBase + "/JiraUsers/:id/owned_sessions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use JiraUser.owned_sessions() instead.
        "::get::JiraUser::owned_sessions": {
          isArray: true,
          url: urlBase + "/JiraUsers/:id/owned_sessions",
          method: "GET"
        },

        // INTERNAL. Use JiraUser.owned_sessions.create() instead.
        "::create::JiraUser::owned_sessions": {
          url: urlBase + "/JiraUsers/:id/owned_sessions",
          method: "POST"
        },

        // INTERNAL. Use JiraUser.owned_sessions.destroyAll() instead.
        "::delete::JiraUser::owned_sessions": {
          url: urlBase + "/JiraUsers/:id/owned_sessions",
          method: "DELETE"
        },

        // INTERNAL. Use JiraUser.owned_sessions.count() instead.
        "::count::JiraUser::owned_sessions": {
          url: urlBase + "/JiraUsers/:id/owned_sessions/count",
          method: "GET"
        },

        // INTERNAL. Use Participant.session() instead.
        "::get::Participant::session": {
          url: urlBase + "/Participants/:id/session",
          method: "GET"
        },

        // INTERNAL. Use Issue.session() instead.
        "::get::Issue::session": {
          url: urlBase + "/Issues/:id/session",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Session#updateOrCreate
         * @methodOf lbServices.Session
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Session` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Session#update
         * @methodOf lbServices.Session
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Session#destroyById
         * @methodOf lbServices.Session
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Session#removeById
         * @methodOf lbServices.Session
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Session#modelName
    * @propertyOf lbServices.Session
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Session`.
    */
    R.modelName = "Session";


        /**
         * @ngdoc method
         * @name lbServices.Session#owner
         * @methodOf lbServices.Session
         *
         * @description
         *
         * Fetches belongsTo relation owner.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JiraUser` object.)
         * </em>
         */
        R.owner = function() {
          var TargetResource = $injector.get("JiraUser");
          var action = TargetResource["::get::Session::owner"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Session.participants
     * @header lbServices.Session.participants
     * @object
     * @description
     *
     * The object `Session.participants` groups methods
     * manipulating `Participant` instances related to `Session`.
     *
     * Call {@link lbServices.Session#participants Session.participants()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Session#participants
         * @methodOf lbServices.Session
         *
         * @description
         *
         * Queries participants of Session.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participant` object.)
         * </em>
         */
        R.participants = function() {
          var TargetResource = $injector.get("Participant");
          var action = TargetResource["::get::Session::participants"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Session.participants#count
         * @methodOf lbServices.Session.participants
         *
         * @description
         *
         * Counts participants of Session.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.participants.count = function() {
          var TargetResource = $injector.get("Participant");
          var action = TargetResource["::count::Session::participants"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Session.participants#create
         * @methodOf lbServices.Session.participants
         *
         * @description
         *
         * Creates a new instance in participants of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participant` object.)
         * </em>
         */
        R.participants.create = function() {
          var TargetResource = $injector.get("Participant");
          var action = TargetResource["::create::Session::participants"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Session.participants#destroyAll
         * @methodOf lbServices.Session.participants
         *
         * @description
         *
         * Deletes all participants of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.participants.destroyAll = function() {
          var TargetResource = $injector.get("Participant");
          var action = TargetResource["::delete::Session::participants"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Session.participants#destroyById
         * @methodOf lbServices.Session.participants
         *
         * @description
         *
         * Delete a related item by id for participants.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for participants
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.participants.destroyById = function() {
          var TargetResource = $injector.get("Participant");
          var action = TargetResource["::destroyById::Session::participants"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Session.participants#findById
         * @methodOf lbServices.Session.participants
         *
         * @description
         *
         * Find a related item by id for participants.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for participants
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participant` object.)
         * </em>
         */
        R.participants.findById = function() {
          var TargetResource = $injector.get("Participant");
          var action = TargetResource["::findById::Session::participants"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Session.participants#updateById
         * @methodOf lbServices.Session.participants
         *
         * @description
         *
         * Update a related item by id for participants.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for participants
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participant` object.)
         * </em>
         */
        R.participants.updateById = function() {
          var TargetResource = $injector.get("Participant");
          var action = TargetResource["::updateById::Session::participants"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Session.issues
     * @header lbServices.Session.issues
     * @object
     * @description
     *
     * The object `Session.issues` groups methods
     * manipulating `Issue` instances related to `Session`.
     *
     * Call {@link lbServices.Session#issues Session.issues()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Session#issues
         * @methodOf lbServices.Session
         *
         * @description
         *
         * Queries issues of Session.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Issue` object.)
         * </em>
         */
        R.issues = function() {
          var TargetResource = $injector.get("Issue");
          var action = TargetResource["::get::Session::issues"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Session.issues#count
         * @methodOf lbServices.Session.issues
         *
         * @description
         *
         * Counts issues of Session.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.issues.count = function() {
          var TargetResource = $injector.get("Issue");
          var action = TargetResource["::count::Session::issues"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Session.issues#create
         * @methodOf lbServices.Session.issues
         *
         * @description
         *
         * Creates a new instance in issues of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Issue` object.)
         * </em>
         */
        R.issues.create = function() {
          var TargetResource = $injector.get("Issue");
          var action = TargetResource["::create::Session::issues"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Session.issues#destroyAll
         * @methodOf lbServices.Session.issues
         *
         * @description
         *
         * Deletes all issues of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.issues.destroyAll = function() {
          var TargetResource = $injector.get("Issue");
          var action = TargetResource["::delete::Session::issues"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Session.issues#destroyById
         * @methodOf lbServices.Session.issues
         *
         * @description
         *
         * Delete a related item by id for issues.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for issues
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.issues.destroyById = function() {
          var TargetResource = $injector.get("Issue");
          var action = TargetResource["::destroyById::Session::issues"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Session.issues#findById
         * @methodOf lbServices.Session.issues
         *
         * @description
         *
         * Find a related item by id for issues.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for issues
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Issue` object.)
         * </em>
         */
        R.issues.findById = function() {
          var TargetResource = $injector.get("Issue");
          var action = TargetResource["::findById::Session::issues"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Session.issues#updateById
         * @methodOf lbServices.Session.issues
         *
         * @description
         *
         * Update a related item by id for issues.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for issues
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Issue` object.)
         * </em>
         */
        R.issues.updateById = function() {
          var TargetResource = $injector.get("Issue");
          var action = TargetResource["::updateById::Session::issues"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.JiraUser
 * @header lbServices.JiraUser
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `JiraUser` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "JiraUser",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/JiraUsers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#prototype$__findById__accessTokens
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JiraUser` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          url: urlBase + "/JiraUsers/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#prototype$__destroyById__accessTokens
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          url: urlBase + "/JiraUsers/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#prototype$__updateById__accessTokens
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JiraUser` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          url: urlBase + "/JiraUsers/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use JiraUser.owned_sessions.findById() instead.
        "prototype$__findById__owned_sessions": {
          url: urlBase + "/JiraUsers/:id/owned_sessions/:fk",
          method: "GET"
        },

        // INTERNAL. Use JiraUser.owned_sessions.destroyById() instead.
        "prototype$__destroyById__owned_sessions": {
          url: urlBase + "/JiraUsers/:id/owned_sessions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use JiraUser.owned_sessions.updateById() instead.
        "prototype$__updateById__owned_sessions": {
          url: urlBase + "/JiraUsers/:id/owned_sessions/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#prototype$__get__accessTokens
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Queries accessTokens of JiraUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JiraUser` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/JiraUsers/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#prototype$__create__accessTokens
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JiraUser` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/JiraUsers/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#prototype$__delete__accessTokens
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/JiraUsers/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#prototype$__count__accessTokens
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Counts accessTokens of JiraUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/JiraUsers/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use JiraUser.owned_sessions() instead.
        "prototype$__get__owned_sessions": {
          isArray: true,
          url: urlBase + "/JiraUsers/:id/owned_sessions",
          method: "GET"
        },

        // INTERNAL. Use JiraUser.owned_sessions.create() instead.
        "prototype$__create__owned_sessions": {
          url: urlBase + "/JiraUsers/:id/owned_sessions",
          method: "POST"
        },

        // INTERNAL. Use JiraUser.owned_sessions.destroyAll() instead.
        "prototype$__delete__owned_sessions": {
          url: urlBase + "/JiraUsers/:id/owned_sessions",
          method: "DELETE"
        },

        // INTERNAL. Use JiraUser.owned_sessions.count() instead.
        "prototype$__count__owned_sessions": {
          url: urlBase + "/JiraUsers/:id/owned_sessions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#create
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JiraUser` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/JiraUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#upsert
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JiraUser` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/JiraUsers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#exists
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/JiraUsers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#findById
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JiraUser` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/JiraUsers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#find
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JiraUser` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/JiraUsers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#findOne
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JiraUser` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/JiraUsers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#updateAll
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/JiraUsers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#deleteById
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/JiraUsers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#count
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/JiraUsers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#prototype$updateAttributes
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JiraUser` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/JiraUsers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#login
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/JiraUsers/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#logout
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Logout a user with access token
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/JiraUsers/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#confirm
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Confirm a user registration with email verification token
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/JiraUsers/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#resetPassword
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Reset password for a user with email
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/JiraUsers/reset",
          method: "POST"
        },

        // INTERNAL. Use Session.owner() instead.
        "::get::Session::owner": {
          url: urlBase + "/Sessions/:id/owner",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#getCurrent
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/JiraUsers" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.JiraUser#updateOrCreate
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JiraUser` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#update
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#destroyById
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#removeById
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#getCachedCurrent
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.JiraUser#login} or
         * {@link lbServices.JiraUser#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A JiraUser instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#isAuthenticated
         * @methodOf lbServices.JiraUser
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.JiraUser#getCurrentId
         * @methodOf lbServices.JiraUser
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.JiraUser#modelName
    * @propertyOf lbServices.JiraUser
    * @description
    * The name of the model represented by this $resource,
    * i.e. `JiraUser`.
    */
    R.modelName = "JiraUser";

    /**
     * @ngdoc object
     * @name lbServices.JiraUser.owned_sessions
     * @header lbServices.JiraUser.owned_sessions
     * @object
     * @description
     *
     * The object `JiraUser.owned_sessions` groups methods
     * manipulating `Session` instances related to `JiraUser`.
     *
     * Call {@link lbServices.JiraUser#owned_sessions JiraUser.owned_sessions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.JiraUser#owned_sessions
         * @methodOf lbServices.JiraUser
         *
         * @description
         *
         * Queries owned_sessions of JiraUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Session` object.)
         * </em>
         */
        R.owned_sessions = function() {
          var TargetResource = $injector.get("Session");
          var action = TargetResource["::get::JiraUser::owned_sessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.JiraUser.owned_sessions#count
         * @methodOf lbServices.JiraUser.owned_sessions
         *
         * @description
         *
         * Counts owned_sessions of JiraUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.owned_sessions.count = function() {
          var TargetResource = $injector.get("Session");
          var action = TargetResource["::count::JiraUser::owned_sessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.JiraUser.owned_sessions#create
         * @methodOf lbServices.JiraUser.owned_sessions
         *
         * @description
         *
         * Creates a new instance in owned_sessions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Session` object.)
         * </em>
         */
        R.owned_sessions.create = function() {
          var TargetResource = $injector.get("Session");
          var action = TargetResource["::create::JiraUser::owned_sessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.JiraUser.owned_sessions#destroyAll
         * @methodOf lbServices.JiraUser.owned_sessions
         *
         * @description
         *
         * Deletes all owned_sessions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.owned_sessions.destroyAll = function() {
          var TargetResource = $injector.get("Session");
          var action = TargetResource["::delete::JiraUser::owned_sessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.JiraUser.owned_sessions#destroyById
         * @methodOf lbServices.JiraUser.owned_sessions
         *
         * @description
         *
         * Delete a related item by id for owned_sessions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for owned_sessions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.owned_sessions.destroyById = function() {
          var TargetResource = $injector.get("Session");
          var action = TargetResource["::destroyById::JiraUser::owned_sessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.JiraUser.owned_sessions#findById
         * @methodOf lbServices.JiraUser.owned_sessions
         *
         * @description
         *
         * Find a related item by id for owned_sessions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for owned_sessions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Session` object.)
         * </em>
         */
        R.owned_sessions.findById = function() {
          var TargetResource = $injector.get("Session");
          var action = TargetResource["::findById::JiraUser::owned_sessions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.JiraUser.owned_sessions#updateById
         * @methodOf lbServices.JiraUser.owned_sessions
         *
         * @description
         *
         * Update a related item by id for owned_sessions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for owned_sessions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Session` object.)
         * </em>
         */
        R.owned_sessions.updateById = function() {
          var TargetResource = $injector.get("Session");
          var action = TargetResource["::updateById::JiraUser::owned_sessions"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Participant
 * @header lbServices.Participant
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Participant` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Participant",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Participants/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Participant.session() instead.
        "prototype$__get__session": {
          url: urlBase + "/Participants/:id/session",
          method: "GET"
        },

        // INTERNAL. Use Participant.ratings.findById() instead.
        "prototype$__findById__ratings": {
          url: urlBase + "/Participants/:id/ratings/:fk",
          method: "GET"
        },

        // INTERNAL. Use Participant.ratings.destroyById() instead.
        "prototype$__destroyById__ratings": {
          url: urlBase + "/Participants/:id/ratings/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Participant.ratings.updateById() instead.
        "prototype$__updateById__ratings": {
          url: urlBase + "/Participants/:id/ratings/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Participant.ratings() instead.
        "prototype$__get__ratings": {
          isArray: true,
          url: urlBase + "/Participants/:id/ratings",
          method: "GET"
        },

        // INTERNAL. Use Participant.ratings.create() instead.
        "prototype$__create__ratings": {
          url: urlBase + "/Participants/:id/ratings",
          method: "POST"
        },

        // INTERNAL. Use Participant.ratings.destroyAll() instead.
        "prototype$__delete__ratings": {
          url: urlBase + "/Participants/:id/ratings",
          method: "DELETE"
        },

        // INTERNAL. Use Participant.ratings.count() instead.
        "prototype$__count__ratings": {
          url: urlBase + "/Participants/:id/ratings/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Participant#create
         * @methodOf lbServices.Participant
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participant` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Participants",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Participant#upsert
         * @methodOf lbServices.Participant
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participant` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Participants",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Participant#exists
         * @methodOf lbServices.Participant
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Participants/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Participant#findById
         * @methodOf lbServices.Participant
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participant` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Participants/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Participant#find
         * @methodOf lbServices.Participant
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participant` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Participants",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Participant#findOne
         * @methodOf lbServices.Participant
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participant` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Participants/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Participant#updateAll
         * @methodOf lbServices.Participant
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Participants/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Participant#deleteById
         * @methodOf lbServices.Participant
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Participants/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Participant#count
         * @methodOf lbServices.Participant
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Participants/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Participant#prototype$updateAttributes
         * @methodOf lbServices.Participant
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participant` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Participants/:id",
          method: "PUT"
        },

        // INTERNAL. Use Session.participants.findById() instead.
        "::findById::Session::participants": {
          url: urlBase + "/Sessions/:id/participants/:fk",
          method: "GET"
        },

        // INTERNAL. Use Session.participants.destroyById() instead.
        "::destroyById::Session::participants": {
          url: urlBase + "/Sessions/:id/participants/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Session.participants.updateById() instead.
        "::updateById::Session::participants": {
          url: urlBase + "/Sessions/:id/participants/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Session.participants() instead.
        "::get::Session::participants": {
          isArray: true,
          url: urlBase + "/Sessions/:id/participants",
          method: "GET"
        },

        // INTERNAL. Use Session.participants.create() instead.
        "::create::Session::participants": {
          url: urlBase + "/Sessions/:id/participants",
          method: "POST"
        },

        // INTERNAL. Use Session.participants.destroyAll() instead.
        "::delete::Session::participants": {
          url: urlBase + "/Sessions/:id/participants",
          method: "DELETE"
        },

        // INTERNAL. Use Session.participants.count() instead.
        "::count::Session::participants": {
          url: urlBase + "/Sessions/:id/participants/count",
          method: "GET"
        },

        // INTERNAL. Use Rating.participant() instead.
        "::get::Rating::participant": {
          url: urlBase + "/Ratings/:id/participant",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Participant#updateOrCreate
         * @methodOf lbServices.Participant
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participant` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Participant#update
         * @methodOf lbServices.Participant
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Participant#destroyById
         * @methodOf lbServices.Participant
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Participant#removeById
         * @methodOf lbServices.Participant
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Participant#modelName
    * @propertyOf lbServices.Participant
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Participant`.
    */
    R.modelName = "Participant";


        /**
         * @ngdoc method
         * @name lbServices.Participant#session
         * @methodOf lbServices.Participant
         *
         * @description
         *
         * Fetches belongsTo relation session.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Session` object.)
         * </em>
         */
        R.session = function() {
          var TargetResource = $injector.get("Session");
          var action = TargetResource["::get::Participant::session"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Participant.ratings
     * @header lbServices.Participant.ratings
     * @object
     * @description
     *
     * The object `Participant.ratings` groups methods
     * manipulating `Rating` instances related to `Participant`.
     *
     * Call {@link lbServices.Participant#ratings Participant.ratings()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Participant#ratings
         * @methodOf lbServices.Participant
         *
         * @description
         *
         * Queries ratings of Participant.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R.ratings = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::get::Participant::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Participant.ratings#count
         * @methodOf lbServices.Participant.ratings
         *
         * @description
         *
         * Counts ratings of Participant.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.ratings.count = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::count::Participant::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Participant.ratings#create
         * @methodOf lbServices.Participant.ratings
         *
         * @description
         *
         * Creates a new instance in ratings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R.ratings.create = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::create::Participant::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Participant.ratings#destroyAll
         * @methodOf lbServices.Participant.ratings
         *
         * @description
         *
         * Deletes all ratings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ratings.destroyAll = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::delete::Participant::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Participant.ratings#destroyById
         * @methodOf lbServices.Participant.ratings
         *
         * @description
         *
         * Delete a related item by id for ratings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ratings
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ratings.destroyById = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::destroyById::Participant::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Participant.ratings#findById
         * @methodOf lbServices.Participant.ratings
         *
         * @description
         *
         * Find a related item by id for ratings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ratings
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R.ratings.findById = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::findById::Participant::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Participant.ratings#updateById
         * @methodOf lbServices.Participant.ratings
         *
         * @description
         *
         * Update a related item by id for ratings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ratings
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R.ratings.updateById = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::updateById::Participant::ratings"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Issue
 * @header lbServices.Issue
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Issue` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Issue",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Issues/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Issue.session() instead.
        "prototype$__get__session": {
          url: urlBase + "/Issues/:id/session",
          method: "GET"
        },

        // INTERNAL. Use Issue.ratings.findById() instead.
        "prototype$__findById__ratings": {
          url: urlBase + "/Issues/:id/ratings/:fk",
          method: "GET"
        },

        // INTERNAL. Use Issue.ratings.destroyById() instead.
        "prototype$__destroyById__ratings": {
          url: urlBase + "/Issues/:id/ratings/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Issue.ratings.updateById() instead.
        "prototype$__updateById__ratings": {
          url: urlBase + "/Issues/:id/ratings/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Issue.ratings() instead.
        "prototype$__get__ratings": {
          isArray: true,
          url: urlBase + "/Issues/:id/ratings",
          method: "GET"
        },

        // INTERNAL. Use Issue.ratings.create() instead.
        "prototype$__create__ratings": {
          url: urlBase + "/Issues/:id/ratings",
          method: "POST"
        },

        // INTERNAL. Use Issue.ratings.destroyAll() instead.
        "prototype$__delete__ratings": {
          url: urlBase + "/Issues/:id/ratings",
          method: "DELETE"
        },

        // INTERNAL. Use Issue.ratings.count() instead.
        "prototype$__count__ratings": {
          url: urlBase + "/Issues/:id/ratings/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Issue#create
         * @methodOf lbServices.Issue
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Issue` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Issues",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Issue#upsert
         * @methodOf lbServices.Issue
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Issue` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Issues",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Issue#exists
         * @methodOf lbServices.Issue
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Issues/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Issue#findById
         * @methodOf lbServices.Issue
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Issue` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Issues/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Issue#find
         * @methodOf lbServices.Issue
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Issue` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Issues",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Issue#findOne
         * @methodOf lbServices.Issue
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Issue` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Issues/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Issue#updateAll
         * @methodOf lbServices.Issue
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Issues/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Issue#deleteById
         * @methodOf lbServices.Issue
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Issues/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Issue#count
         * @methodOf lbServices.Issue
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Issues/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Issue#prototype$updateAttributes
         * @methodOf lbServices.Issue
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Issue` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Issues/:id",
          method: "PUT"
        },

        // INTERNAL. Use Session.issues.findById() instead.
        "::findById::Session::issues": {
          url: urlBase + "/Sessions/:id/issues/:fk",
          method: "GET"
        },

        // INTERNAL. Use Session.issues.destroyById() instead.
        "::destroyById::Session::issues": {
          url: urlBase + "/Sessions/:id/issues/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Session.issues.updateById() instead.
        "::updateById::Session::issues": {
          url: urlBase + "/Sessions/:id/issues/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Session.issues() instead.
        "::get::Session::issues": {
          isArray: true,
          url: urlBase + "/Sessions/:id/issues",
          method: "GET"
        },

        // INTERNAL. Use Session.issues.create() instead.
        "::create::Session::issues": {
          url: urlBase + "/Sessions/:id/issues",
          method: "POST"
        },

        // INTERNAL. Use Session.issues.destroyAll() instead.
        "::delete::Session::issues": {
          url: urlBase + "/Sessions/:id/issues",
          method: "DELETE"
        },

        // INTERNAL. Use Session.issues.count() instead.
        "::count::Session::issues": {
          url: urlBase + "/Sessions/:id/issues/count",
          method: "GET"
        },

        // INTERNAL. Use Rating.issue() instead.
        "::get::Rating::issue": {
          url: urlBase + "/Ratings/:id/issue",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Issue#updateOrCreate
         * @methodOf lbServices.Issue
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Issue` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Issue#update
         * @methodOf lbServices.Issue
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Issue#destroyById
         * @methodOf lbServices.Issue
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Issue#removeById
         * @methodOf lbServices.Issue
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Issue#modelName
    * @propertyOf lbServices.Issue
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Issue`.
    */
    R.modelName = "Issue";


        /**
         * @ngdoc method
         * @name lbServices.Issue#session
         * @methodOf lbServices.Issue
         *
         * @description
         *
         * Fetches belongsTo relation session.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Session` object.)
         * </em>
         */
        R.session = function() {
          var TargetResource = $injector.get("Session");
          var action = TargetResource["::get::Issue::session"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Issue.ratings
     * @header lbServices.Issue.ratings
     * @object
     * @description
     *
     * The object `Issue.ratings` groups methods
     * manipulating `Rating` instances related to `Issue`.
     *
     * Call {@link lbServices.Issue#ratings Issue.ratings()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Issue#ratings
         * @methodOf lbServices.Issue
         *
         * @description
         *
         * Queries ratings of Issue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R.ratings = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::get::Issue::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Issue.ratings#count
         * @methodOf lbServices.Issue.ratings
         *
         * @description
         *
         * Counts ratings of Issue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.ratings.count = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::count::Issue::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Issue.ratings#create
         * @methodOf lbServices.Issue.ratings
         *
         * @description
         *
         * Creates a new instance in ratings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R.ratings.create = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::create::Issue::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Issue.ratings#destroyAll
         * @methodOf lbServices.Issue.ratings
         *
         * @description
         *
         * Deletes all ratings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ratings.destroyAll = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::delete::Issue::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Issue.ratings#destroyById
         * @methodOf lbServices.Issue.ratings
         *
         * @description
         *
         * Delete a related item by id for ratings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ratings
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ratings.destroyById = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::destroyById::Issue::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Issue.ratings#findById
         * @methodOf lbServices.Issue.ratings
         *
         * @description
         *
         * Find a related item by id for ratings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ratings
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R.ratings.findById = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::findById::Issue::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Issue.ratings#updateById
         * @methodOf lbServices.Issue.ratings
         *
         * @description
         *
         * Update a related item by id for ratings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ratings
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R.ratings.updateById = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::updateById::Issue::ratings"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Rating
 * @header lbServices.Rating
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Rating` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Rating",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Ratings/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Rating.participant() instead.
        "prototype$__get__participant": {
          url: urlBase + "/Ratings/:id/participant",
          method: "GET"
        },

        // INTERNAL. Use Rating.issue() instead.
        "prototype$__get__issue": {
          url: urlBase + "/Ratings/:id/issue",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#create
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Ratings",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#upsert
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Ratings",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#exists
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Ratings/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#findById
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Ratings/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#find
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Ratings",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#findOne
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Ratings/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#updateAll
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Ratings/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#deleteById
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Ratings/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#count
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Ratings/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#prototype$updateAttributes
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Ratings/:id",
          method: "PUT"
        },

        // INTERNAL. Use Participant.ratings.findById() instead.
        "::findById::Participant::ratings": {
          url: urlBase + "/Participants/:id/ratings/:fk",
          method: "GET"
        },

        // INTERNAL. Use Participant.ratings.destroyById() instead.
        "::destroyById::Participant::ratings": {
          url: urlBase + "/Participants/:id/ratings/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Participant.ratings.updateById() instead.
        "::updateById::Participant::ratings": {
          url: urlBase + "/Participants/:id/ratings/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Participant.ratings() instead.
        "::get::Participant::ratings": {
          isArray: true,
          url: urlBase + "/Participants/:id/ratings",
          method: "GET"
        },

        // INTERNAL. Use Participant.ratings.create() instead.
        "::create::Participant::ratings": {
          url: urlBase + "/Participants/:id/ratings",
          method: "POST"
        },

        // INTERNAL. Use Participant.ratings.destroyAll() instead.
        "::delete::Participant::ratings": {
          url: urlBase + "/Participants/:id/ratings",
          method: "DELETE"
        },

        // INTERNAL. Use Participant.ratings.count() instead.
        "::count::Participant::ratings": {
          url: urlBase + "/Participants/:id/ratings/count",
          method: "GET"
        },

        // INTERNAL. Use Issue.ratings.findById() instead.
        "::findById::Issue::ratings": {
          url: urlBase + "/Issues/:id/ratings/:fk",
          method: "GET"
        },

        // INTERNAL. Use Issue.ratings.destroyById() instead.
        "::destroyById::Issue::ratings": {
          url: urlBase + "/Issues/:id/ratings/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Issue.ratings.updateById() instead.
        "::updateById::Issue::ratings": {
          url: urlBase + "/Issues/:id/ratings/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Issue.ratings() instead.
        "::get::Issue::ratings": {
          isArray: true,
          url: urlBase + "/Issues/:id/ratings",
          method: "GET"
        },

        // INTERNAL. Use Issue.ratings.create() instead.
        "::create::Issue::ratings": {
          url: urlBase + "/Issues/:id/ratings",
          method: "POST"
        },

        // INTERNAL. Use Issue.ratings.destroyAll() instead.
        "::delete::Issue::ratings": {
          url: urlBase + "/Issues/:id/ratings",
          method: "DELETE"
        },

        // INTERNAL. Use Issue.ratings.count() instead.
        "::count::Issue::ratings": {
          url: urlBase + "/Issues/:id/ratings/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Rating#updateOrCreate
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Rating#update
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Rating#destroyById
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Rating#removeById
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Rating#modelName
    * @propertyOf lbServices.Rating
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Rating`.
    */
    R.modelName = "Rating";


        /**
         * @ngdoc method
         * @name lbServices.Rating#participant
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Fetches belongsTo relation participant.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Participant` object.)
         * </em>
         */
        R.participant = function() {
          var TargetResource = $injector.get("Participant");
          var action = TargetResource["::get::Rating::participant"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Rating#issue
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Fetches belongsTo relation issue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Issue` object.)
         * </em>
         */
        R.issue = function() {
          var TargetResource = $injector.get("Issue");
          var action = TargetResource["::get::Rating::issue"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Color
 * @header lbServices.Color
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Color` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Color",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/colors/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Color#create
         * @methodOf lbServices.Color
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Color` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/colors",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Color#upsert
         * @methodOf lbServices.Color
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Color` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/colors",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Color#exists
         * @methodOf lbServices.Color
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/colors/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Color#findById
         * @methodOf lbServices.Color
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Color` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/colors/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Color#find
         * @methodOf lbServices.Color
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Color` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/colors",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Color#findOne
         * @methodOf lbServices.Color
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Color` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/colors/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Color#updateAll
         * @methodOf lbServices.Color
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/colors/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Color#deleteById
         * @methodOf lbServices.Color
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/colors/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Color#count
         * @methodOf lbServices.Color
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/colors/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Color#prototype$updateAttributes
         * @methodOf lbServices.Color
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Color` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/colors/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Color#updateOrCreate
         * @methodOf lbServices.Color
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Color` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Color#update
         * @methodOf lbServices.Color
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Color#destroyById
         * @methodOf lbServices.Color
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Color#removeById
         * @methodOf lbServices.Color
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Color#modelName
    * @propertyOf lbServices.Color
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Color`.
    */
    R.modelName = "Color";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Fibinacci_Value
 * @header lbServices.Fibinacci_Value
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Fibinacci_Value` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Fibinacci_Value",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/fibinacci_values/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Fibinacci_Value#create
         * @methodOf lbServices.Fibinacci_Value
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fibinacci_Value` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/fibinacci_values",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fibinacci_Value#upsert
         * @methodOf lbServices.Fibinacci_Value
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fibinacci_Value` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/fibinacci_values",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fibinacci_Value#exists
         * @methodOf lbServices.Fibinacci_Value
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/fibinacci_values/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fibinacci_Value#findById
         * @methodOf lbServices.Fibinacci_Value
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fibinacci_Value` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/fibinacci_values/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fibinacci_Value#find
         * @methodOf lbServices.Fibinacci_Value
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fibinacci_Value` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/fibinacci_values",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fibinacci_Value#findOne
         * @methodOf lbServices.Fibinacci_Value
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fibinacci_Value` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/fibinacci_values/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fibinacci_Value#updateAll
         * @methodOf lbServices.Fibinacci_Value
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/fibinacci_values/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fibinacci_Value#deleteById
         * @methodOf lbServices.Fibinacci_Value
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/fibinacci_values/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fibinacci_Value#count
         * @methodOf lbServices.Fibinacci_Value
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/fibinacci_values/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fibinacci_Value#prototype$updateAttributes
         * @methodOf lbServices.Fibinacci_Value
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fibinacci_Value` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/fibinacci_values/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Fibinacci_Value#updateOrCreate
         * @methodOf lbServices.Fibinacci_Value
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fibinacci_Value` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Fibinacci_Value#update
         * @methodOf lbServices.Fibinacci_Value
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Fibinacci_Value#destroyById
         * @methodOf lbServices.Fibinacci_Value
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Fibinacci_Value#removeById
         * @methodOf lbServices.Fibinacci_Value
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Fibinacci_Value#modelName
    * @propertyOf lbServices.Fibinacci_Value
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Fibinacci_Value`.
    */
    R.modelName = "Fibinacci_Value";


    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
