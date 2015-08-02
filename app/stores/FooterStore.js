import alt from '../alt';
import FooterActions from '../actions/FooterActions';

class FooterStore {

  constructor() {
    this.bindActions(FooterActions);
    this.characters = [];
  }

  onGetTopCharactersSuccess(data) {
    this.characters = data.slice(0, 5);
  }

  onGetTopCharactersFail(jqXhr) {
    var message = jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText;
    toastr.error(message);
  }

}

export default alt.createStore(FooterStore);
