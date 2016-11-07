import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if ($.isArray(payload.data)) {
      payload.data.map(this.change_type);
    } else {
      payload.data.type = 'shares';
    }
    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  change_type(share) {
    share.type = 'shares';
    return share;
  }
});

