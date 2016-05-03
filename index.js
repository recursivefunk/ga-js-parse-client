var request

const ParseObjectType = function(objName) {
  const apiHost = process.env.API_HOST || 'http://localhost:4321';
  this.customRequest = request.defaults({
    headers: {
    'X-Parse-Application-Id': process.env.APP_ID,
    'X-Parse-REST-API-Key': process.env.API_KEY,
    'Content-Type': 'application/json'
    }
  });
  this.objName = objName;
  this.baseUrl = `${apiHost}/parse/classes/${objName}`;
};

ParseObjectType.prototype.getAll = function(onGet) {
  this.customRequest(this.baseUrl, (err, httpR, body) => {
    if (err) {
      onGet(err);
    } else {
      parseResponse(body, onGet);
    }
  });
};

ParseObjectType.prototype.get = function(id, onGet) {
  const requestUrl = `${this.baseUrl}/${id}`;
  this.customRequest(requestUrl, (err, httpR, body) => {
    if (err) {
      onGet(err);
    } else {
      parseResponse(body, onGet);
    }
  });
};

ParseObjectType.prototype.create = function(props, onCreate) {
  this.customRequest.post({
    url: this.baseUrl,
    form: props
  },
  (err, httpR, body) => {
    if (err) {
      onCreate(err);
    } else {
      parseResponse(body, onCreate);
    }
  });
};

ParseObjectType.prototype.update = function(objId, props, onUpdate) {
  this.customRequest.put({
    url: `${this.baseUrl}/${objId}`,
    form: props
  },
  (err, httpR, body) => {
    if (err) {
      onUpdate(err);
    } else {
      parseResponse(body, onUpdate);
    }
  });
};

ParseObjectType.prototype.remove = function(objId, onRemove) {
  this.customRequest.delete(this.baseUrl + '/' + objId, (err) => {
    if (err) {
      onRemove(err);
    } else {
      onRemove(null, { message: `Successfully deleted object ${objId}` });
    }
  });
};

function parseResponse(body, callback) {
  try {
    const data = JSON.parse(body);
    callback(null, data);
  } catch(e) {
    console.error(e.stack);
    callback(Error(`An error occured while parsing response: ${e.message}`));
  }
}

TypeFactory = function(objType, local) {
	return new ParseObjectType(objType, local);
};
